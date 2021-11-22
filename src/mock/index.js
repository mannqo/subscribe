import Mock from 'mockjs'

Mock.mock(/getTickets.*/, { 
    data: {
        'list|10': [{
            'id|1-3000000000': 0,
            'time': '08-11',
            'clock': function () {
                let num = Math.random() * 4
                if (num < 1) {
                    return '9:00-9:30'
                }
                else if (num < 2) {
                    return '10:00-10:30'
                }
                else if (num < 3) {
                    return '14:30-15:00'
                }
                else {
                    return '15:00-15:30'
                }
            }
        }]
    }
})
