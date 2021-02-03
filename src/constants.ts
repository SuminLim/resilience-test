export enum CalculationType {
  PLUS,
  MINUS,
}

export const QUESTION: { label: string, calculation?: CalculationType }[] = [
  {
    label: '1. 나는 어려운 일이 닥쳤을 때 감정을 통제할 수 있다.',
    calculation: CalculationType.PLUS,
  },
  {
    label: '2. 내가 무슨 생각을 하면, 그 생각이 내 기분에 어떤 영향을 미칠지 잘 알아챈다.',
    calculation: CalculationType.PLUS,
  },
  {
    label: '3. 논쟁거리가 되는 문제를 가족이나 친구들과 토론할 때 내 감정을 잘 통제할 수 있다.',
    calculation: CalculationType.PLUS,
  },
  {
    label: '4. 집중해야 할 중요한 일이 생기면 신바람이 나기보다는 더 스트레스를 받는 편이다.',
    calculation: CalculationType.MINUS,
  },
  {
    label: '5. 나는 내 감정에 잘 휘말린다.',
    calculation: CalculationType.MINUS,
  },
  // {
  //   label: '6. 때때로 내 감정적인 문제 때문에 학교나 직장에서 공부하거나 일할 때 집중하기 힘들다.',
  //   calculation: CalculationType.MINUS,
  // },
  // {
  //   label: '7. 당장 해야 할 일이 있으면 나는 어떠한 유혹이나 방해도 잘 이겨내고 할 일을 한다.',
  //   calculation: CalculationType.PLUS,
  // },
  // {
  //   label: '8. 아무리 당황스럽고 어려운 상황이 닥쳐도, 나는 내가 어떤 생각을 하고 있는지 스스로 잘 안다.',
  //   calculation: CalculationType.PLUS,
  // },
  // {
  //   label: '9. 누군가가 나에게 화를 낼 경우 나는 우선 그 사람의 의견을 잘 듣는다.',
  //   calculation: CalculationType.PLUS,
  // },
  // {
  //   label: '10. 일이 생각대로 잘 안 풀리면 쉽게 포기하는 편이다.',
  //   calculation: CalculationType.MINUS,
  // },
  // {
  //   label: '11. 평소 경제적인 소비나 지출 규모에 대해 별다른 계획 없이 지낸다.',
  //   calculation: CalculationType.MINUS,
  // },
  // {
  //   label: '12. 미리 계획을 세우기보다는 즉흥적으로 일을 처리하는 편이다.',
  //   calculation: CalculationType.MINUS,
  // },
  // {
  //   label: '13. 문제가 생기면 여러 가지 가능한 해결 방안에 대해 먼저 생각한 후에 해결하려고 노력한다.',
  //   calculation: CalculationType.PLUS,
  // },
  // {
  //   label: '14. 어려운 일이 생기면 그 원인이 무엇인지 신중하게 생각한 후에 해결하려고 노력한다.',
  //   calculation: CalculationType.PLUS,
  // },
  // {
  //   label: '15. 나는 대부분의 상황에서 문제의 원인을 잘 알고 있다고 믿는다.',
  //   calculation: CalculationType.PLUS,
  // },
  // {
  //   label: '16. 나는 사건이나 상황을 잘 파악하지 못한다는 이야기를 종종 듣는다,',
  //   calculation: CalculationType.MINUS,
  // },
  // {
  //   label: '17. 문제가 생기면 나는 성급하게 결론을 내린다는 이야기를 종종 듣는다.',
  //   calculation: CalculationType.MINUS,
  // },
  // {
  //   label: '18. 어려운 일이 생기면, 그 원인을 완전히 이해하지 못했다 하더라도 일단 빨리 해결하는 것이 좋다고 생각한다.',
  //   calculation: CalculationType.MINUS,
  // },
  // {
  //   label: '19. 나는 분위기나 대화 상대에 따라 대화를 잘 이끌어 나갈 수 있다.',
  //   calculation: CalculationType.PLUS,
  // },
  // {
  //   label: '20. 나는 재치 있는 농담을 잘 한다.',
  //   calculation: CalculationType.PLUS,
  // },
  // {
  //   label: '21. 나는 내가 표현하고자 하는 바에 대한 적절한 문구나 단어를 잘 찾아낸다.',
  //   calculation: CalculationType.PLUS,
  // },
  // {
  //   label: '22. 나는 윗사람과 대화하는 것이 부담스럽다.',
  //   calculation: CalculationType.MINUS,
  // },
  // {
  //   label: '23. 나는 대화중에 다른 생각을 하느라 대화 내용을 놓칠 때가 종종 있다.',
  //   calculation: CalculationType.MINUS,
  // },
  // {
  //   label: '24. 대화를 할 때 하고 싶은 말을 다 하지 못하고 주저할 때가 종종 있다.',
  //   calculation: CalculationType.MINUS,
  // },
  // {
  //   label: '25. 사람들의 얼굴 표정을 보면 어떤 감정인지 알 수 있다.',
  //   calculation: CalculationType.PLUS,
  // },
  // {
  //   label: '26. 슬퍼하거나 화를 내거나 당황하는 사람을 보면 그들이 어떤 생각을 하는지 잘 알 수 있다.',
  //   calculation: CalculationType.PLUS,
  // },
  // {
  //   label: '27. 동료가 화를 낼 경우 나는 그 이유를 잘 아는 편이다.',
  //   calculation: CalculationType.PLUS,
  // },
  // {
  //   label: '28. 나는 사람들의 행동 방식을 때로 이해하기 힘들다.',
  //   calculation: CalculationType.MINUS,
  // },
  // {
  //   label: '29. 친한 친구나 애인 혹은 배우자로부터 "당신은 나를 이해 못해"라는 말을 종종 듣는다.',
  //   calculation: CalculationType.MINUS,
  // },
  // {
  //   label: '30. 동료와 친구들은 내가 자기 말을 잘 듣지 않는다고 한다.',
  //   calculation: CalculationType.MINUS,
  // },
  // {
  //   label: '31. 나는 내 주변 사람들로부터 사랑과 관심을 받고 있다.',
  //   calculation: CalculationType.PLUS,
  // },
  // {
  //   label: '32. 나는 내 친구들을 정말 좋아한다.',
  //   calculation: CalculationType.PLUS,
  // },
  // {
  //   label: '33. 내 주변 사람들은 내 기분을 잘 이해한다.',
  //   calculation: CalculationType.PLUS,
  // },
  // {
  //   label: '34. 서로 도움을 주고받는 친구가 별로 없다.',
  //   calculation: CalculationType.MINUS,
  // },
  // {
  //   label: '35. 나와 정기적으로 만나는 사람들은 대부분 나를 싫어하게 된다.',
  //   calculation: CalculationType.MINUS,
  // },
  // {
  //   label: '36. 서로 마음을 터놓고 얘기할 수 있는 친구가 거의 없다.',
  //   calculation: CalculationType.MINUS,
  // },
  // {
  //   label: '37. 열심히 일하면 언젠가 보담이 있으리라고 생각한다.',
  //   calculation: CalculationType.PLUS,
  // },
  // {
  //   label: '38. 맞든 아니든, "아무리 어려운 문제라도 나는 해결할 수 있다"고 일단 믿는 것이 좋다고 생각한다.',
  //   calculation: CalculationType.PLUS,
  // },
  // {
  //   label: '39. 어려운 상황이 닥쳐도 나는 모든 일이 다 잘 해결될 거라고 확신한다.',
  //   calculation: CalculationType.PLUS,
  // },
  // {
  //   label: '40. 내가 어떤 일을 마치고 나면, 주변 사람들이 부정적인 평가를 할까봐 걱정한다.',
  //   calculation: CalculationType.MINUS,
  // },
  // {
  //   label: '41. 나에게 일어나는 대부분의 문제들은 나로서는 어쩔 수 없는 상황에 의해 발생한다고 믿는다.',
  //   calculation: CalculationType.MINUS,
  // },
  // {
  //   label: '42. 누가 나의 미래에 대해 물어보면, 성공한 나의 모습을 상상하기 힘들다.',
  //   calculation: CalculationType.MINUS,
  // },
  // {
  //   label: '43. 내 삶은 내가 생각하는 이상적인 삶에 가깝다.',
  //   calculation: CalculationType.PLUS,
  // },
  // {
  //   label: '44. 내 인생의 여러 가지 조건들은 만족스럽다.',
  //   calculation: CalculationType.PLUS,
  // },
  // {
  //   label: '45. 나는 내 삶에 만족한다.',
  //   calculation: CalculationType.PLUS,
  // },
  // {
  //   label: '46. 나는 내 삶에서 중요하다고 생각한 것들은 다 갖고 있다.',
  //   calculation: CalculationType.PLUS,
  // },
  // {
  //   label: '47. 나는 다시 태어나도 나의 현재 삶을 다시 살고 싶다.',
  //   calculation: CalculationType.PLUS,
  // },
  // {
  //   label: '48. 나는 다양한 종류의 많은 사람들에게 고마움을 느낀다.',
  //   calculation: CalculationType.PLUS,
  // },
  // {
  //   label: '49. 내가 고맙게 여기는 것들을 모두 적는다면, 아주 긴 목록이 될 것이다.',
  //   calculation: CalculationType.PLUS,
  // },
  // {
  //   label: '50. 나이가 들어갈수록 내 삶의 일부가 된 사람, 사건, 생활에 대해 감사하는 마음이 더 켜져간다.',
  //   calculation: CalculationType.PLUS,
  // },
  // {
  //   label: '51. 나는 감사해야 할 것이 별로 없다.',
  //   calculation: CalculationType.MINUS,
  // },
  // {
  //   label: '52. 세상을 둘러볼 때, 내가 고마워 할 것은 별로 없다.',
  //   calculation: CalculationType.MINUS,
  // },
  // {
  //   label: '53. 사람이나 일에 대한 고마움을 한참 시간이 지난 후에야 겨우 느낀다.',
  //   calculation: CalculationType.MINUS,
  // },
];

export const TOTAL_QUESTION_COUNT = QUESTION.length;

export const ResultDescriptionMap = {
  170: {
    subject: '많이 힘들었죠. 괜찮아요. 괜찮아질거에요. 다시 일어날 수 있어요. 제가 위로해줄게요',
    desc: '170점 이하라면 당신은 깨지기 쉬운 유리 같은 존재라 할 수 있다. 크고 작은 자그마한 불행에도 쉽게 상처를 입게 되며 그 상처는 쉽게 치유되지 않을 것이다. 하루하루를 살얼음 위를 걷는 기분으로 살아온 당신은 지금 당장 회복탄력성을 높이기 위해 온 힘을 기울어야 한다.'
  },
  180: {
    subject: '힘내요.',
    desc: '180점 이하라면 당신은 자그마한 부정적인 사건에도 쉽게 영향 받는 나약한 존재다. 당신은 되튀어오를 힘을 빨리 길러야 한다.'
  },
  190: {
    subject: '조금만 더!',
    desc: '만약 당신의 점수가 190이하라면 회복탄력성을 높이기 위해 노력하는 것이 좋다.'
  },
  200: {
    subject: '👍👍👍',
    desc: '만약 당신의 점수가 200점을 넘는다면 일단 안심이다. 그러나 212점 정도는 돼야 상위 20%에 들 수 있다.'
  },
  220: {
    subject: '😮🥇🎉',
    desc: '220점을 넘는다면 당신은 대단히 회복탄력성이 높은 사람이다. 웬만한 불행한 사건은 당신을 흔들어 놓지 못한다. 오히려 역경은 당신을 더 높은 곳으로 올려놓기 위한 스프링보드이니 즐겁게 받아들일 일이다.'
  },
};
