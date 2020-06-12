import './scss/index.scss'

const question = document.querySelector('.question')
const answerItemAll = document.querySelectorAll('.answer-item')

const store = {
    quiz :[
        {
            questions:[
                {
                    item:'Какого цвета небо?',
                    rightId: 3
            },
            {
                item: 'В каком году началась 2 мировая война?',
                rightId:2
            }
            ]
        },
        {
            answers1: [ 
                 {answer: 'Синее', id: 1},
                    {answer: 'Желтое', id: 2},
                    {answer: 'Голубое', id: 3},
                    {answer: 'Зеленое', id: 4}

            ],
            answers2: [ 
                   {answer: '1939', id: 1},
                   {answer: '1939', id: 2},
                   {answer: '1939', id: 3},
                   {answer: '1939', id: 4}

           ]
            
        }
    ]
}

question.innerHTML = store.quiz[0].questions[0].item
answerItemAll.forEach((elem, index)=> {
    elem.setAttribute('data-id', index + 1)
    elem.addEventListener('click', event => {
        if(event.target.dataset.id == store.quiz[0].questions[0].rightId){
            question.innerHTML = store.quiz[0].questions[1].item
            answerItemAll.forEach((elem)=>{
                elem.innerHTML = store.quiz[1].answers2[index].answer
            })
        }
        
    })
    elem.innerHTML = store.quiz[1].answers1[index].answer
})


