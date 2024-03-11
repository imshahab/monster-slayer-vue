new Vue({
    el: '#app',
    data: {
        userHealth: 100,
        monsterHealth: 100,
        gameOver: false,
        logs: [],
    },
    methods: {
        startNew: function() {
            this.userHealth = 100
            this.monsterHealth = 100
            this.gameOver = false
            this.logs = []
        },
        monsterAttack: function() {
            if (!this.gameOver) {
                let damage = Math.floor(Math.random() * 16)
                let newHealth = this.userHealth - damage
                newHealth >= 0 ? this.userHealth = newHealth : this.userHealth = 0
                this.logs.unshift({turn: 'monster', enemy: 'player', act: 'hits', amount: damage})
            }
        },
        attack: function() {
            if (!this.gameOver) {
                let damage = Math.floor(Math.random() * 11)
                let newHealth = this.monsterHealth - damage
                newHealth >= 0 ? this.monsterHealth = newHealth : this.monsterHealth = 0
                this.logs.unshift({turn: 'player', enemy: 'monster', act: 'hits', amount: damage})
                this.monsterAttack()
            }
        },
        specialAttack: function() {
            if (!this.gameOver) {
                let damage = Math.floor(Math.random() * 21)
                let newHealth = this.monsterHealth - damage
                newHealth >= 0 ? this.monsterHealth = newHealth : this.monsterHealth = 0
                this.logs.unshift({turn: 'player', enemy: 'monster', act: 'hits', amount: damage})
                this.monsterAttack()
            }
        },
        heal: function() {
            if (!this.gameOver) {
                let healAmount = Math.floor(Math.random() * 11)
                let newHealth = this.userHealth + healAmount
                newHealth <= 100 ? this.userHealth = newHealth : this.userHealth = 100
                this.logs.unshift({turn: 'player', enemy: '', act: 'heals', amount: healAmount})
                this.monsterAttack()
            }
        },
        giveUp: function() {
            this.gameOver = true
        }
    },
    watch: {
        userHealth: function() {
            this.userHealth === 0 && this.monsterHealth > 0 && alert('You lose!') 
            this.monsterHealth === 0 && this.userHealth > 0 && alert('You win!')
            this.monsterHealth === 0 && this.userHealth === 0 && alert('Tie!')
            if (this.userHealth === 0 || this.monsterHealth === 0) {
                this.gameOver = true 
            }
        }
    }
})
    

