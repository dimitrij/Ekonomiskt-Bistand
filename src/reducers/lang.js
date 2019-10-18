const lang = [{
    language: {
      name: 'swedish',
      icon: '🇸🇪'
    },
    leftToRight: true,
    title: ' Testa om du kan få försörjningsstöd ',
    resultText: {
      yes: 'Beräkningen visar att dina månadsinkomster är ##### kr lägre än den nivå som kan ge rätt till försörjningsstöd. Det kan betyda att du får försörjningsstöd om du ansöker. Socialtjänsten gör en individuell bedömning och kan ta hänsyn till annat än ekonomiska faktorer. Kontakta socialtjänsten i din kommun om du vill ansöka om försörjningsstöd eller ha mer information.',
      no: 'Beräkningen visar att dina månadsinkomster är ##### kr högre än den nivå som kan ge rätt till försörjningsstöd. Det kan betyda att du inte får försörjningsstöd om du ansöker. Socialtjänsten gör en individuell bedömning och kan ta hänsyn till annat än ekonomiska faktorer. Kontakta socialtjänsten i din kommun om du vill ansöka om försörjningsstöd eller ha mer information.'
    },
    allFamilyCountText: 'antal familj medlemmar',
    sections: {
      section: 'Information',
      sectionTitle: 'Information',
      inputs: [{
          section: 'income',
          sectionTitle: 'Inkomster',
          description: 'Ange hela hushållets inkomster per månad i respektive ruta. Beloppen ska vara netto efter skatt och avrundade till hela kronor. Inkomster som inte passar in kan du lägga ihop under övrigt. Om du inte anger några inkomster räknas de som noll (0).',
          id: 1,
          SvgKey: 'Salary',
          title: 'Lön',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Salary',
            placeholder: 'belopp',
          }]
        },
        {
          section: 'income',
          id: 2,
          SvgKey: 'Unions_Fees_And_A-kassa',
          title: 'Arbetslöshetsersättning',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Unions_Fees_And_A-kassa',
            placeholder: 'belopp',
          }]
        },
        {
          section: 'income',
          id: 3,
          SvgKey: 'Sick_Activities_Replacement',
          title: 'Sjuk- och aktivitetsersättning',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Sick_Activities_Replacement',
            placeholder: 'belopp'
          }]
        },
        {
          section: 'income',
          id: 4,
          SvgKey: 'Sickness_Benefit',
          title: 'Sjukpenning',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Sickness_Benefit',
            placeholder: 'belopp'
          }]
        },
        {
          section: 'income',
          id: 5,
          SvgKey: 'Parental_Allowance',
          title: 'Föräldrapenning',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Parental_Allowance',
            placeholder: 'belopp'
          }]
        },
        {
          section: 'income',
          id: 6,
          SvgKey: 'Pension',
          title: 'Pension',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Pension',
            placeholder: 'belopp'
          }]
        },
        {
          section: 'income',
          id: 7,
          SvgKey: 'Maintenance_Grants',
          title: 'Underhållsstöd/-bidrag',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Maintenance_Grants',
            placeholder: 'belopp'
          }]
        },
        {
          section: 'income',
          id: 8,
          SvgKey: 'Parental_Allowance',
          title: 'Barnbidrag',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Child_Benefit',
            placeholder: 'belopp'
          }]
        },
        {
          section: 'income',
          id: 9,
          SvgKey: 'Pension',
          title: 'Studiestöd',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Student_Aid',
            placeholder: 'belopp'
          }]
        },
        {
          section: 'income',
          id: 10,
          SvgKey: 'Maintenance_Grants',
          title: 'Bostadsbidrag',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Housing_benefit',
            placeholder: 'belopp'
          }]
        },
        {
          section: 'income',
          id: 11,
          SvgKey: 'Others',
          title: 'Övrigt',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Others',
            placeholder: 'belopp'
          }]
        },
        {
          section: 'expenditure',
          description: 'Ange hela hushållets utgifter per månad i respektive ruta. Avrunda till hela kronor. Om du inte anger några kostnader räknas de som noll (0).',
          sectionTitle: 'Utgifter',
          id: 12,
          SvgKey: 'Maintenance_Grants',
          title: 'Bostad',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Rent',
            placeholder: 'belopp'
          }]
        },
        {
          section: 'expenditure',
          id: 13,
          SvgKey: 'Electricity',
          title: 'Hushållsel',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Electricity',
            placeholder: 'belopp'
          }]
        },
        {
          section: 'expenditure',
          id: 14,
          SvgKey: 'Work_Travels',
          title: 'Arbetsresor',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Work_Travels',
            placeholder: 'belopp'
          }]
        },
        {
          section: 'expenditure',
          id: 15,
          SvgKey: 'Maintenance_Grants',
          title: 'Hemförsäkring',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Home_Insurance',
            placeholder: 'belopp'
          }]
        },
        {
          section: 'expenditure',
          id: 16,
          SvgKey: 'Unions_Fees_And_A-kassa',
          title: 'Fackföreningsavgift och avgift för arbetslöshetskassa',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Unemployment_Benefit_Fee_for_Unemployment_Benefit',
            placeholder: 'belopp'
          }]
        },
        {
          section: 'familyStatus',
          description: 'De uppgifter du matar in om hushållets medlemmar avgör vilka belopp som hämtas från riksnormen. Om du inte anger något hämtas beloppet för ensamstående utan barn.',
          sectionTitle: 'Familje förhållande',
          id: 17,
          type: 'radio',
          title: 'hushållets vuxna medlemmar',
          defaultValue: '0',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
              title: 'Jag är ensamstående',
              key: '0'
            },
            {
              title: 'Jag är sammanboende (med vuxen)',
              key: '1'
            }
          ]
        },
        {
          section: 'familyStatus',
          id: 18,
          defaultValues: {},
          SvgKey: 'Family',
          title: 'Fyll i hur många barn som bor hos dig',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Antal barn i familjen',
            placeholder: 'belopp',
            max: 15,
            defaultValue: 0
          }],
          userInputsSelectValue: [{
              name: '0-1',
              indexes: [],
              placeholder: '0-1 år',
            },
            {
              name: '1-2',
              indexes: [],
              placeholder: '1-2 år',
            },
            {
              name: '3',
              indexes: [],
              placeholder: '3 år',
            },
            {
              name: '4-6',
              indexes: [],
              placeholder: '4-6 år',
            },
            {
              name: '7-10',
              indexes: [],
              placeholder: '7-10 år',
            },
            {
              name: '11-14',
              indexes: [],
              placeholder: '11-14 år',
            },
            {
              name: '15-18',
              indexes: [],
              placeholder: '15-18 år',
            },
            {
              name: '19-20',
              indexes: [],
              placeholder: '19-20 år, går i skolan',
            }
          ]
        }
      ]
    },
    Guide: {
      sections: [{
          key: 'Funds_and_foundations',
          title: 'Fonder och stiftelser',
          subtitle: 'Helsingborgs stad har hand om ett stort antal stiftelser. Många av dessa kan du söka pengar från. Du får svar på din ansökan efter maximalt fyra månader från det att du har skickat den. Kom ihåg att du måste vara folkbokförd i Helsingborg och du kan endast bli beviljad en gång per kalenderår, oavsett när du skickade in din ansökan.',
          links: [{
            title: 'Fonder och stiftelser',
            link: 'https://helsingborg.se/omsorg-och-stod/socialt-och-ekonomiskt-stod/fonder-och-stiftelser-2/'
          }]
        },
        {
          key: 'Budget_and_debt_counseling',
          title: 'Budget- och skuldrådgivning',
          subtitle: 'Helsingborg erbjuder dig som har hamnat i ekonomiska svårigheter kostnadsfri budget- och skuldrådgivning. Rådgivarna finns på Helsingborg kontaktcenter.',
          links: [{
            title: 'länk',
            link: 'https://helsingborg.se/omsorg-och-stod/socialt-och-ekonomiskt-stod/fonder-och-stiftelser-2/'
          }, {
            title: 'Boka tid till rådgivning',
            link: 'https://eservice.helsingborg.se/H71'
          }]
        },
        {
          key: 'GoodMan_trustee_guardian',
          title: 'God man, förvaltare, förmyndare',
          subtitle: 'Om du behöver någon som hjälper dig att ha hand om din ekonomi eller att prata med kommunen och andra myndigheter, kan du få en god man eller en förvaltare. ',
          links: [{
            title: 'länk',
            link: 'https://helsingborg.se/omsorg-och-stod/socialt-och-ekonomiskt-stod/god-man-forvaltare-formyndare/'
          }]
        },
        {
          key: 'rental_advice',
          title: 'Hyresrådgivning',
          subtitle: 'Har du hyresskulder, svårt att betala din hyra i tid? Är ditt hyreskontrakt uppsagt eller riskerar du vräkning på grund av obetald hyra?',
          links: [{
            title: 'länk',
            link: 'https://helsingborg.se/omsorg-och-stod/socialt-och-ekonomiskt-stod/hyresradgivning/'
          }]
        },
        {
          key: 'consumer_advice',
          title: 'Konsumentrådgivning',
          subtitle: 'Du som bor i kommunerna Helsingborg, Klippan eller Örkelljunga kan få gratis och oberoende konsumentrådgivning av kommunens konsumentrådgivare.',
          links: [{
              title: 'länk',
              link: 'https://helsingborg.se/bo-bygga-och-miljo/konsumentradgivning/'
            },
            {
              title: 'Fråga konsumentrådgivaren',
              link: 'https://helsingborg.se/bo-bygga-och-miljo/konsumentradgivning/fraga-oss/'
            }
          ]
        },
        {
          key: 'on_death',
          title: 'Vid dödsfall',
          subtitle: 'I vissa fall kan Helsingborgs stad hjälpa till att göra en enklare bouppteckning, en så kallad dödsboanmälan. När någon avlider måste den avlidne personens ekonomi redovisas i en bouppteckning som skickas till Skatteverket. Den kan göras privat av den som har god kännedom om boet eller genom att anlita jurist på exempelvis bank eller begravningsbyrå.',
          links: [{
              title: 'länk',
              link: 'https://helsingborg.se/omsorg-och-stod/socialt-och-ekonomiskt-stod/dodsfall-och-begravning/'
            },
            {
              title: 'Bistånd till begravningskostnad',
              link: 'https://helsingborg.se/omsorg-och-stod/socialt-och-ekonomiskt-stod/forsorjningsstod-socialbidrag/bistand-till-begravningskostnad/'
            }
          ]
        }, {
          key: 'financial_assistance_during_holidays',
          title: 'Ekonomiskt bistånd under lov',
          subtitle: 'Som vuxenstuderande ska du i första hand söka sommarjobb så att du själv kan försörja dig under studieuppehållet. I god tid före uppehållet måste du söka alla typer av sommarjobb.',
          links: [{
            title: 'länk',
            link: 'https://helsingborg.se/omsorg-och-stod/socialt-och-ekonomiskt-stod/forsorjningsstod-socialbidrag/forsorjningsstod-under-lov/'
          }]
        }
      ]
    },
    buttons: {
      resetBtn: 'Reset',
      finish: 'Finish',
      next: 'Next',
      back: 'Back'
    },
    steppersSteps: {
      incomeStepTitle: 'Income',
      expensesStepTitle: 'Expenses',
      summaryStepTitle: 'Summary',
      familyStatus: 'Family Status'
    }
  },
  {
    language: {
      name: 'arabic',
      icon: '🇦🇪'
    },
    leftToRight: false,
    title: ' اختبار ما اذا كان يمكنك الحصول على دعم الدخل ',
    resultText: {
      yes: 'يوضح الحساب أن دخلك الشهري هو ##### أقل من المستوى الذي يمكن أن يؤهلك لدعم المدفوعات. قد يعني هذا أنك تتلقى مدفوعات الدعم إذا تقدمت بطلب. تقوم الخدمة الاجتماعية بإجراء تقييم فردي ويمكن أن تأخذ في الاعتبار غير العوامل المالية. اتصل بالخدمات الاجتماعية في بلديتك إذا كنت ترغب في التقدم للحصول على دعم الرعاية الاجتماعية أو الحصول على مزيد من المعلومات.',
      no: 'يوضح الحساب أن دخلك الشهري أعلى ##### من المستوى الذي يمكن أن يتأهل للحصول على مدفوعات الدعم. قد يعني هذا أنك لا تتلقى مدفوعات الدعم إذا تقدمت بطلب. تقوم الخدمة الاجتماعية بإجراء تقييم فردي ويمكن أن تأخذ في الاعتبار غير العوامل المالية. اتصل بالخدمات الاجتماعية في بلديتك إذا كنت ترغب في التقدم للحصول على دعم الرعاية الاجتماعية أو الحصول على مزيد من المعلومات.'
    },
    allFamilyCountText: 'عدد جميع افراد الاسرة',
    sections: {
      section: 'Information',
      sectionTitle: 'المعلومات المطلوبة',
      inputs: [{
          section: 'income',
          sectionTitle: 'الدخل',
          description: 'أدخل دخل الأسرة بالكامل شهريًا في المربع المعني. يجب أن تكون المبالغ صافية بعد الضريبة وتقريبها إلى كرون كامل. الإيرادات التي لا تصلح يمكن أن تضاف معا. إذا لم تحدد أي دخل ، يتم حسابها على أنها صفر (0).',
          id: 1,
          SvgKey: 'الرابت',
          title: 'Lön',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Salary',
            placeholder: 'belopp',
          }]
        },
        {
          section: 'income',
          id: 2,
          SvgKey: 'Unions_Fees_And_A-kassa',
          title: 'اعانة البطالة',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Unions_Fees_And_A-kassa',
            placeholder: 'belopp',
          }]
        },
        {
          section: 'income',
          id: 3,
          SvgKey: 'Sick_Activities_Replacement',
          title: 'المرض وتعويض النشاط',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Sick_Activities_Replacement',
            placeholder: 'belopp'
          }]
        },
        {
          section: 'income',
          id: 4,
          SvgKey: 'Sickness_Benefit',
          title: 'المرض',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Sickness_Benefit',
            placeholder: 'belopp'
          }]
        },
        {
          section: 'income',
          id: 5,
          SvgKey: 'Parental_Allowance',
          title: 'الأبوية',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Parental_Allowance',
            placeholder: 'belopp'
          }]
        },
        {
          section: 'income',
          id: 6,
          SvgKey: 'Pension',
          title: 'التقاعد',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Pension',
            placeholder: 'belopp'
          }]
        },
        {
          section: 'income',
          id: 7,
          SvgKey: 'Maintenance_Grants',
          title: 'دعم بدل الصيانة',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Maintenance_Grants',
            placeholder: 'belopp'
          }]
        },
        {
          section: 'income',
          id: 8,
          SvgKey: 'Parental_Allowance',
          title: 'اعانة الطفل',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Child_Benefit',
            placeholder: 'belopp'
          }]
        },
        {
          section: 'income',
          id: 9,
          SvgKey: 'Pension',
          title: 'دعم الطلاب',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Student_Aid',
            placeholder: 'belopp'
          }]
        },
        {
          section: 'income',
          id: 10,
          SvgKey: 'Maintenance_Grants',
          title: 'دعم السكن',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Housing_benefit',
            placeholder: 'belopp'
          }]
        },
        {
          section: 'income',
          id: 11,
          SvgKey: 'مداخيل اخرى',
          title: 'Övrigt',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Others',
            placeholder: 'belopp'
          }]
        },
        {
          section: 'expenditure',
          description: 'أدخل نفقات الأسرة بأكملها شهريًا في المربع المعني. كل القيم بالكرون . إذا لم تحدد أي تكاليف ، فسيتم حسابها على أنها صفر (0)..',
          sectionTitle: 'Utgifter',
          id: 12,
          SvgKey: 'Maintenance_Grants',
          title: 'أجار السكن',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Rent',
            placeholder: 'belopp'
          }]
        },
        {
          section: 'expenditure',
          id: 13,
          SvgKey: 'Electricity',
          title: 'الكهرباء',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Electricity',
            placeholder: 'belopp'
          }]
        },
        {
          section: 'expenditure',
          id: 14,
          SvgKey: 'Work_Travels',
          title: 'تكاليف المواصلات',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Work_Travels',
            placeholder: 'belopp'
          }]
        },
        {
          section: 'expenditure',
          id: 15,
          SvgKey: 'Maintenance_Grants',
          title: 'تأمين المنزل',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Home_Insurance',
            placeholder: 'belopp'
          }]
        },
        {
          section: 'expenditure',
          id: 16,
          SvgKey: 'Unions_Fees_And_A-kassa',
          title: 'دفوعات النقابة و صندوق البطالة',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Unemployment_Benefit_Fee_for_Unemployment_Benefit',
            placeholder: 'belopp'
          }]
        },
        {
          section: 'familyStatus',
          description: 'تحدد المعلومات التي تدخلها عن أفراد الأسرة المبالغ التي يتم جمعها من المعيار الوطني. إذا لم تحدد أي شيء ، فسيتم جمع المبلغ المخصص للأشخاص غير المتزوجين دون أطفال.',
          sectionTitle: 'حالة العائلة',
          id: 17,
          type: 'radio',
          title: 'حالة العائلة',
          defaultValue: '0',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
              title: 'أنا وحيد',
              key: '0'
            },
            {
              title: 'اسكن مع شخص',
              key: '1'
            }
          ]
        },
        {
          section: 'familyStatus',
          id: 18,
          defaultValues: {},
          SvgKey: 'Family',
          title: 'كم عدد الاطفال في الاسرة',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'العدد',
            placeholder: 'belopp',
            max: 15,
            defaultValue: 0
          }],
          userInputsSelectValue: [{
              name: '0-1',
              indexes: [],
              placeholder: '0-1 سنة',
            },
            {
              name: '1-2',
              indexes: [],
              placeholder: '1-2 سنة',
            },
            {
              name: '3',
              indexes: [],
              placeholder: '3 سنة',
            },
            {
              name: '4-6',
              indexes: [],
              placeholder: '4-6 سنة',
            },
            {
              name: '7-10',
              indexes: [],
              placeholder: '7-10 سنة',
            },
            {
              name: '11-14',
              indexes: [],
              placeholder: '11-14 سنة',
            },
            {
              name: '15-18',
              indexes: [],
              placeholder: '15-18 سنة',
            },
            {
              name: '19-20',
              indexes: [],
              placeholder: '19-20 سنة, يذهبون الى المدرسة',
            }
          ]
        }
      ]
    },
    Guide: {
      sections: [{
          key: 'Funds_and_foundations',
          title: 'Fonder och stiftelser',
          subtitle: 'Helsingborgs stad har hand om ett stort antal stiftelser. Många av dessa kan du söka pengar från. Du får svar på din ansökan efter maximalt fyra månader från det att du har skickat den. Kom ihåg att du måste vara folkbokförd i Helsingborg och du kan endast bli beviljad en gång per kalenderår, oavsett när du skickade in din ansökan.',
          links: [{
            title: 'Fonder och stiftelser',
            link: 'https://helsingborg.se/omsorg-och-stod/socialt-och-ekonomiskt-stod/fonder-och-stiftelser-2/'
          }]
        },
        {
          key: 'Budget_and_debt_counseling',
          title: 'Budget- och skuldrådgivning',
          subtitle: 'Helsingborg erbjuder dig som har hamnat i ekonomiska svårigheter kostnadsfri budget- och skuldrådgivning. Rådgivarna finns på Helsingborg kontaktcenter.',
          links: [{
            title: 'länk',
            link: 'https://helsingborg.se/omsorg-och-stod/socialt-och-ekonomiskt-stod/fonder-och-stiftelser-2/'
          }, {
            title: 'Boka tid till rådgivning',
            link: 'https://eservice.helsingborg.se/H71'
          }]
        },
        {
          key: 'GoodMan_trustee_guardian',
          title: 'God man, förvaltare, förmyndare',
          subtitle: 'Om du behöver någon som hjälper dig att ha hand om din ekonomi eller att prata med kommunen och andra myndigheter, kan du få en god man eller en förvaltare. ',
          links: [{
            title: 'länk',
            link: 'https://helsingborg.se/omsorg-och-stod/socialt-och-ekonomiskt-stod/god-man-forvaltare-formyndare/'
          }]
        },
        {
          key: 'rental_advice',
          title: 'Hyresrådgivning',
          subtitle: 'Har du hyresskulder, svårt att betala din hyra i tid? Är ditt hyreskontrakt uppsagt eller riskerar du vräkning på grund av obetald hyra?',
          links: [{
            title: 'länk',
            link: 'https://helsingborg.se/omsorg-och-stod/socialt-och-ekonomiskt-stod/hyresradgivning/'
          }]
        },
        {
          key: 'consumer_advice',
          title: 'Konsumentrådgivning',
          subtitle: 'Du som bor i kommunerna Helsingborg, Klippan eller Örkelljunga kan få gratis och oberoende konsumentrådgivning av kommunens konsumentrådgivare.',
          links: [{
              title: 'länk',
              link: 'https://helsingborg.se/bo-bygga-och-miljo/konsumentradgivning/'
            },
            {
              title: 'Fråga konsumentrådgivaren',
              link: 'https://helsingborg.se/bo-bygga-och-miljo/konsumentradgivning/fraga-oss/'
            }
          ]
        },
        {
          key: 'on_death',
          title: 'Vid dödsfall',
          subtitle: 'I vissa fall kan Helsingborgs stad hjälpa till att göra en enklare bouppteckning, en så kallad dödsboanmälan. När någon avlider måste den avlidne personens ekonomi redovisas i en bouppteckning som skickas till Skatteverket. Den kan göras privat av den som har god kännedom om boet eller genom att anlita jurist på exempelvis bank eller begravningsbyrå.',
          links: [{
              title: 'länk',
              link: 'https://helsingborg.se/omsorg-och-stod/socialt-och-ekonomiskt-stod/dodsfall-och-begravning/'
            },
            {
              title: 'Bistånd till begravningskostnad',
              link: 'https://helsingborg.se/omsorg-och-stod/socialt-och-ekonomiskt-stod/forsorjningsstod-socialbidrag/bistand-till-begravningskostnad/'
            }
          ]
        }, {
          key: 'financial_assistance_during_holidays',
          title: 'Ekonomiskt bistånd under lov',
          subtitle: 'Som vuxenstuderande ska du i första hand söka sommarjobb så att du själv kan försörja dig under studieuppehållet. I god tid före uppehållet måste du söka alla typer av sommarjobb.',
          links: [{
            title: 'länk',
            link: 'https://helsingborg.se/omsorg-och-stod/socialt-och-ekonomiskt-stod/forsorjningsstod-socialbidrag/forsorjningsstod-under-lov/'
          }]
        }
      ]
    },
    buttons: {
      resetBtn: 'Reset',
      finish: 'Finish',
      next: 'Next',
      back: 'Back'
    },
    steppersSteps: {
      incomeStepTitle: 'Income',
      expensesStepTitle: 'Expenses',
      summaryStepTitle: 'Summary',
      familyStatus: 'Family Status'
    }
  }

];
export default lang