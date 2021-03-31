import axios from 'axios' // npm에서 설치한 패키지를 이렇게 불러올 수도 있다

function fetchMovies() {
    axios
        .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')  // 요청을 할때 https로 하자
        .then((res) => {       // 이때 (res) => {}        이 부분은 익명 화살표 함수이며 res는 내가 임의로 정한 매개변수다!!!!!!!!!!! ajax fetch!!!!
            console.log(res)
            const h1El = document.querySelector('h1');
            const imgEl = document.querySelector('img');
            h1El.textContent = res.data.Search[0].Title;
            imgEl.src = res.data.Search[0].Poster
        }) // axios 패키지를 통해서 해당하는 주소를 통해 데이터를 받아오고  then에서 처리하고 활용함.
}

fetchMovies();