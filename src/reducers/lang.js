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
          defaultValue: '1',
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
          SvgKey: 'Family',
          title: 'Fyll i hur många barn som bor hos dig',
          checked: true,
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
              name: '0-1',
              type: 'number',
              placeholder: '0-1 år',
              max: 9,
              defaultValue: 2
            },
            {
              name: '1-2',
              type: 'number',
              placeholder: '1-2 år',
              max: 9,
              defaultValue: 2
            },
            {
              name: '3',
              type: 'number',
              placeholder: '3 år',
              max: 9,
              defaultValue: 2
            },
            {
              name: '4-6',
              type: 'number',
              placeholder: '4-6 år',
              max: 9,
              defaultValue: 2
            },
            {
              name: '7-10',
              type: 'number',
              placeholder: '7-10 år',
              max: 9
            },
            {
              name: '11-14',
              type: 'number',
              placeholder: '11-14 år',
              max: 9
            },
            {
              name: '15-18',
              type: 'number',
              placeholder: '15-18 år',
              max: 9
            },
            {
              name: '19-20',
              type: 'number',
              placeholder: '19-20 år, går i skolan',
              max: 9
            }
          ]
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

];
export default lang

/*
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
    sections: [{
        section: 'income',
        sectionTitle: 'الدخل',
        description: 'أدخل دخل الأسرة بالكامل شهريًا في المربع المعني. يجب أن تكون المبالغ صافية بعد الضريبة وتقريبها إلى كرون كامل. الإيرادات التي لا تصلح يمكن أن تضاف معا. إذا لم تحدد أي دخل ، يتم حسابها على أنها صفر (0).',
        inputs: [{
            id: 1,
            SvgKey: 'Salary',
            title: 'الراتب',
            helpText: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
            ],
            userInputs: [{
              type: 'number',
              name: 'Salary',
              placeholder: 'المبلغ'
            }]
          },
          {
            id: 2,
            SvgKey: 'Unions_Fees_And_A-kassa',
            title: 'إعانات البطالة',
            helpText: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
            ],
            userInputs: [{
              type: 'number',
              name: 'Unions_Fees_And_A-kassa',
              placeholder: 'المبلغ'
            }]
          },
          {
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
              placeholder: 'المبلغ'
            }]
          },
          {
            id: 4,
            SvgKey: 'Sickness_Benefit',
            title: 'حالة المرض',
            helpText: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
            ],
            userInputs: [{
              type: 'number',
              name: 'Sickness_Benefit',
              placeholder: 'المبلغ'
            }]
          },
          {
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
              placeholder: 'المبلغ'
            }]
          },
          {
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
              placeholder: 'المبلغ'
            }]
          },
          {
            id: 7,
            SvgKey: 'Maintenance_Grants',
            title: 'دعم الصيانة / بدل',
            helpText: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
            ],
            userInputs: [{
              type: 'number',
              name: 'maintenance_grants',
              placeholder: 'المبلغ'
            }]
          },
          {
            id: 8,
            SvgKey: 'Parental_Allowance',
            title: 'إعانة الطفل',
            helpText: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
            ],
            userInputs: [{
              type: 'number',
              name: 'Child_Benefit',
              placeholder: 'المبلغ'
            }]
          },
          {
            id: 9,
            SvgKey: 'Pension',
            title: 'دعم الدراسة',
            helpText: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
            ],
            userInputs: [{
              type: 'number',
              name: 'Student_Aid',
              placeholder: 'المبلغ'
            }]
          },
          {
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
              name: 'Housing_Benefit',
              placeholder: 'المبلغ'
            }]
          },
          {
            id: 11,
            SvgKey: 'Others',
            title: 'مداخيل اخرى',
            helpText: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
            ],
            userInputs: [{
              type: 'number',
              name: 'Others',
              placeholder: 'المبلغ'
            }]
          }
        ]
      },
      {
        section: 'expenses',
        sectionTitle: 'الانفاق',
        description: 'أدخل نفقات الأسرة بأكملها شهريًا في المربع المعني. كل القيم بالكرون . إذا لم تحدد أي تكاليف ، فسيتم حسابها على أنها صفر (0)..',
        inputs: [{
            id: 12,
            SvgKey: 'Maintenance_Grants',
            title: 'السكن',
            helpText: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
            ],
            userInputs: [{
              type: 'number',
              name: 'Rent',
              placeholder: 'المبلغ'
            }]
          },
          {
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
              placeholder: 'المبلغ'
            }]
          },
          {
            id: 14,
            SvgKey: 'Work_Travels',
            title: 'المواصلات',
            helpText: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
            ],
            userInputs: [{
              type: 'number',
              name: 'Work_Travels',
              placeholder: 'المبلغ'
            }]
          },
          {
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
              placeholder: 'المبلغ'
            }]
          },
          {
            id: 16,
            SvgKey: 'Unions_Fees_And_A-kassa',
            title: 'الرسوم النقابية ورسوم صندوق البطالة',
            helpText: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
            ],
            userInputs: [{
              type: 'number',
              name: 'Unemployment_Benefit_Fee_for_Unemployment_Benefit',
              placeholder: 'المبلغ'
            }]
          }
        ]
      },
      {
        section: 'familyStatus',
        sectionTitle: 'العائلة ',
        description: 'تحدد المعلومات التي تدخلها عن أفراد الأسرة المبالغ التي يتم جمعها من المعيار الوطني. إذا لم تحدد أي شيء ، فسيتم جمع المبلغ المخصص للأشخاص غير المتزوجين دون أطفال.',
        allFamilyCountText: 'عدد افراد الاسرة كلها ',
        inputs: [{
            id: 1,
            type: 'radio',
            title: 'أفراد الاسرة البالغين',
            defaultValue: '1',
            helpText: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
            ],
            userInputs: [{
                title: 'أعيش لوحدي',
                key: '0'
              },
              {
                title: 'أعيش مع أحد ',
                key: '1'
              }
            ]
          },
          {
            id: 2,
            SvgKey: 'Family',
            title: 'املأ عدد الأطفال الذين يعيشون معك',
            checked: false,
            helpText: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
            ],
            userInputs: [{
                name: '0-1',
                type: 'number',
                placeholder: 'من ٠ الى ١ سنة',
                max: 9
              },
              {
                name: '1-2',
                type: 'number',
                placeholder: 'من سنة الى سنتان',
                max: 9
              },
              {
                name: '3',
                type: 'number',
                placeholder: 'ثلاث سنين',
                max: 9
              },
              {
                name: '4-6',
                type: 'number',
                placeholder: 'من أربعة الى ست سنين',
                max: 9
              },
              {
                name: '7-10',
                type: 'number',
                placeholder: 'من سبع الى عشر سنين',
                max: 9
              },
              {
                name: '11-14',
                type: 'number',
                placeholder: 'من احد عشر الى اربعة عشر سنة',
                max: 9
              },
              {
                name: '15-18',
                type: 'number',
                placeholder: 'من خمسة عشر الى ثمانية عشر سنة',
                max: 9
              },
              {
                name: '19-20',
                type: 'number',
                placeholder: 'من تسعة عشر الى عشرين سنة, يذهبون الى المدرسة',
                max: 9
              }
            ]
          }
        ]
      }
    ],
    buttons: {
      resetBtn: 'Reset',
      finish: 'النهاية',
      next: 'التالي',
      back: 'السابق'
    },
    steppersSteps: {
      incomeStepTitle: 'المدخول',
      expensesStepTitle: 'المصاريف',
      summaryStepTitle: 'النتيجة النهائية',
      familyStatus: 'حالة الاسرة'
    }
  },
  {
    language: {
      name: 'Persian',
      icon: '🇮🇷'
    },
    leftToRight: false,
    title: "اگر می توانید پشتیبانی درآمد دریافت کنید ، آزمایش کنید",
    resultText: {
      yes: 'محاسبه نشان می دهد که درآمد ماهانه شما ##### زیر سطح است که می تواند شما را برای پشتیبانی از پرداخت واجد شرایط کند. این ممکن است بدان معنی باشد که در صورت درخواست ، پرداختهای پشتیبانی دریافت می کنید. خدمات اجتماعی ارزیابی فردی را انجام می دهد و می تواند عوامل غیر مالی را در نظر بگیرد. اگر می خواهید درخواست پشتیبانی رفاه کنید یا اطلاعات بیشتری کسب کنید با خدمات اجتماعی شهرداری خود تماس بگیرید.',
      no: 'این محاسبه نشان می دهد که درآمد ماهانه شما از ##### بالاتر از سطح واجد شرایط پرداخت پشتیبانی است. این ممکن است به این معنی باشد که در صورت درخواست ، پرداخت پشتیبانی دریافت نمی کنید. خدمات اجتماعی ارزیابی فردی را انجام می دهد و می تواند عوامل غیر مالی را در نظر بگیرد. اگر می خواهید درخواست پشتیبانی رفاه کنید یا اطلاعات بیشتری کسب کنید با خدمات اجتماعی شهرداری خود تماس بگیرید.'
    },
    sections: [{
        section: 'income',
        sectionTitle: 'درآمد',
        description: 'کل درآمد خانوار در هر ماه را در کادر مربوطه وارد کنید. مبالغ باید پس از مالیات خالص و گرد شوند تا به مبلغ کامل برسند. درآمدی که مناسب نیست را می توان با هم اضافه کرد. اگر هیچ درآمدی تعیین نکردید ، به صورت صفر (0) محاسبه می شود.',
        inputs: [{
            id: 1,
            SvgKey: 'Salary',
            title: 'حقوق',
            helpText: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
            ],
            userInputs: [{
              type: 'number',
              name: 'Salary',
              placeholder: 'مقدار'
            }]
          },
          {
            id: 2,
            SvgKey: 'Unions_Fees_And_A-kassa',
            title: 'مزایای بیکاری',
            helpText: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
            ],
            userInputs: [{
              type: 'number',
              name: 'Unions_Fees_And_A-kassa',
              placeholder: 'مقدار'
            }]
          },
          {
            id: 3,
            SvgKey: 'Sick_Activities_Replacement',
            title: 'جبران بیماری و فعالیت',
            helpText: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
            ],
            userInputs: [{
              type: 'number',
              name: 'Sick_Activities_Replacement',
              placeholder: 'مقدار'
            }]
          },
          {
            id: 4,
            SvgKey: 'Sickness_Benefit',
            title: 'وضعیت بیماری',
            helpText: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
            ],
            userInputs: [{
              type: 'number',
              name: 'Sickness_Benefit',
              placeholder: 'مقدار'
            }]
          },
          {
            id: 5,
            SvgKey: 'Parental_Allowance',
            title: 'والدین',
            helpText: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
            ],
            userInputs: [{
              type: 'number',
              name: 'Parental_Allowance',
              placeholder: 'مقدار'
            }]
          },
          {
            id: 6,
            SvgKey: 'Pension',
            title: 'بازنشستگی',
            helpText: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
            ],
            userInputs: [{
              type: 'number',
              name: 'Pension',
              placeholder: 'مقدار'
            }]
          },
          {
            id: 7,
            SvgKey: 'Maintenance_Grants',
            title: 'پشتیبانی / کمک هزینه تعمیر و نگهداری',
            helpText: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
            ],
            userInputs: [{
              type: 'number',
              name: 'maintenance_grants',
              placeholder: 'مقدار'
            }]
          },
          {
            id: 8,
            SvgKey: 'Parental_Allowance',
            title: 'منافع کودک',
            helpText: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
            ],
            userInputs: [{
              type: 'number',
              name: 'Child_Benefit',
              placeholder: 'مقدار'
            }]
          },
          {
            id: 9,
            SvgKey: 'Pension',
            title: 'پشتیبانی مطالعه',
            helpText: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
            ],
            userInputs: [{
              type: 'number',
              name: 'Student_Aid',
              placeholder: 'مقدار'
            }]
          },
          {
            id: 10,
            SvgKey: 'Maintenance_Grants',
            title: 'پشتیبانی مسکن',
            helpText: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
            ],
            userInputs: [{
              type: 'number',
              name: 'Housing_Benefit',
              placeholder: 'مقدار'
            }]
          },
          {
            id: 11,
            SvgKey: 'Others',
            title: 'سایر درآمد',
            helpText: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
            ],
            userInputs: [{
              type: 'number',
              name: 'Others',
              placeholder: 'مقدار'
            }]
          }
        ]
      },
      {
        section: 'expenses',
        sectionTitle: 'خرج کردن',
        description: 'مخارج ماهیانه خانوار را در کادر ارائه شده وارد کنید. همه مقادیر در کرون هستند. اگر هیچ هزینه ای را تعیین نکنید ، آنها به صورت صفر (0) محاسبه می شوند.',
        inputs: [{
            id: 12,
            SvgKey: 'Maintenance_Grants',
            title: 'مسکن',
            helpText: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
            ],
            userInputs: [{
              type: 'number',
              name: 'Rent',
              placeholder: 'مقدار'
            }]
          },
          {
            id: 13,
            SvgKey: 'Electricity',
            title: 'برق',
            helpText: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
            ],
            userInputs: [{
              type: 'number',
              name: 'Electricity',
              placeholder: 'مقدار'
            }]
          },
          {
            id: 14,
            SvgKey: 'Work_Travels',
            title: 'حمل و نقل',
            helpText: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
            ],
            userInputs: [{
              type: 'number',
              name: 'Work_Travels',
              placeholder: 'مقدار'
            }]
          },
          {
            id: 15,
            SvgKey: 'Maintenance_Grants',
            title: 'بیمه خانه',
            helpText: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
            ],
            userInputs: [{
              type: 'number',
              name: 'Home_Insurance',
              placeholder: 'مقدار'
            }]
          },
          {
            id: 16,
            SvgKey: 'Unions_Fees_And_A-kassa',
            title: 'هزینه های اتحادیه صنفی و هزینه های صندوق بیکاری',
            helpText: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
            ],
            userInputs: [{
              type: 'number',
              name: 'Unemployment_Benefit_Fee_for_Unemployment_Benefit',
              placeholder: 'مقدار'
            }]
          }
        ]
      },
      {
        section: 'familyStatus',
        sectionTitle: 'خانواده',
        description: 'اطلاعاتی که در مورد اعضای خانواده وارد می کنید ، مبالغ جمع آوری شده از استاندارد ملی را تعیین می کند. اگر چیزی را مشخص نکنید ، مبلغ اختصاص یافته به افراد مجرد و بدون فرزند جمع می شود.',
        allFamilyCountText: 'تعداد اعضای کل خانواده',
        inputs: [{
            id: 1,
            type: 'radio',
            title: 'اعضای خانواده بزرگسال',
            defaultValue: '1',
            helpText: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
            ],
            userInputs: [{
                title: 'من تنها زندگی میکنم',
                key: '0'
              },
              {
                title: 'من با یک زندگی می کنم',
                key: '1'
              }
            ]
          },
          {
            id: 2,
            SvgKey: 'Family',
            title: 'تعداد کودکانی که با شما زندگی می کنند را پر کنید',
            checked: false,
            helpText: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
            ],
            userInputs: [{
                name: '0-1',
                type: 'number',
                placeholder: 'از 0 تا 1 سال',
                max: 9
              },
              {
                name: '1-2',
                type: 'number',
                placeholder: 'از یک تا دو سال',
                max: 9
              },
              {
                name: '3',
                type: 'number',
                placeholder: 'سه سال',
                max: 9
              },
              {
                name: '4-6',
                type: 'number',
                placeholder: 'از چهار تا شش سال',
                max: 9
              },
              {
                name: '7-10',
                type: 'number',
                placeholder: 'هفت تا ده سال',
                max: 9
              },
              {
                name: '11-14',
                type: 'number',
                placeholder: 'از یازده تا چهارده سال',
                max: 9
              },
              {
                name: '15-18',
                type: 'number',
                placeholder: 'از پانزده تا هجده سال',
                max: 9
              },
              {
                name: '19-20',
                type: 'number',
                placeholder: 'از نوزده تا بیست سال به مدرسه می روند',
                max: 9
              }
            ]
          }
        ]
      }
    ],
    buttons: {
      resetBtn: 'Reset',
      finish: 'آخر',
      next: 'بعد',
      back: 'قبلی'
    },
    steppersSteps: {
      incomeStepTitle: 'مصرف',
      expensesStepTitle: 'هزینه ها',
      summaryStepTitle: 'نتیجه نهایی',
      familyStatus: 'وضعیت خانواده'
    }
  }
*/