const quotes = [
  {
    quote: "시도해보지 않고는 누구도 자신이 얼마만큼 해낼 수 있는지 알지 못한다.",
    author: "푸블릴리우스 시루스",
  },
  {
    quote: "말만 하고 행동하지 않는 사람은 잡초로 가득 찬 정원과 같다.",
    author: "하우얼",
  },
  {
    quote: "패배는 최악의 실패가 아니다. 시도를 하지 않는 것이 진짜 실패다.",
    author: "조지 우드베리",
  },
  {
    quote: "경험을 현명하게 사용한다면, 어떤 일도 시간 낭비는 아니다.",
    author: "오귀스트 르네 로댕",
  },
  {
    quote: "실수를 하고 있지 않다면, 자신이 결정을 내리고 있지 않는 것이다.",
    author: "캐더린 쿡",
  },
  {
    quote: "추구할 수 있는 용기가 있다면 우리의 모든 꿈은 이뤄질 수 있다.",
    author: "월트 디즈니",
  },
  {
    quote: "인생이란 자신을 찾는 것이 아니라 자신을 만드는 것이다.",
    author: "롤리 다스칼",
  },
  {
    quote: "성공이란 당신 자신, 당신이 하는 일, 그 일을 하는 방식을 좋아하는 것이다.",
    author: "마야 앤젤루",
  },
  {
    quote: "성공은 매일 반복한 작은 노력들의 합이다.",
    author: "로버트 콜리어",
  },
  {
    quote: "바람이 불지 않으면 노를 저어라.",
    author: "윈스턴 처칠",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()* quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;