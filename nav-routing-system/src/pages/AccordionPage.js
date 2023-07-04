import Accordion from '../components/Accordion';

const AccordionPage = () => {
  const items = [
    {
      id: 1,
      label: 'English',
      content:
        'Lorem ipsum dolor sit amet, dolor dolorem honestatis ei mei, pri sint torquatos cu. In homero consulatu adipiscing nam, at decore eligendi ius, ad vim elit epicuri. Te eum vivendo accumsan facilisi, sea causae inciderint temporibus at. Qui in essent maiorum, suas suscipiantur ei mei, ut est adipisci moderatius. Dicit putent convenire ea vix, in atqui utamur fabulas vim, sonet recteque intellegam id vis.',
    },
    {
      id: 2,
      label: 'Korean',
      content:
        '국민경제의 발전을 위한 중요정책의 수립에 관하여 대통령의 자문에 응하기 위하여 국민경제자문회의를 둘 수 있다.',
    },
    {
      id: 3,
      label: 'Russian',
      content:
        'орем ипсум долор сит амет, пер цлита поссит ех, ат мунере фабулас петентиум сит. Иус цу цибо саперет сцрипсерит, нец виси муциус лабитур ид. Ет хис нонумес нолуиссе дигниссим.',
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default AccordionPage;
