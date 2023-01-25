import { Fragment } from 'react'
export const SUPPORT_CARDS = [
  [
    {
      title: 'Funding:',
      text: 'Funding helps us cover administrative expenses and scholarships for the purchase of training and equipment. Our primary goal is to help students learn to ride more safely, but we need your help!',
    },
    {
      title: 'Gear:',
      text: (
        <Fragment>
          Our students need gear so they can ride safely on and off track. Your
          old gear (or even new) can save someone's life in the event of a crash
          and may be tax deductible
          <sup>
            <a href='#tax-deductible'>[1]</a>
          </sup>
          {'.'}
        </Fragment>
      ),
    },
  ],
  [
    {
      title: 'Large Items:',
      text: (
        <Fragment>
          Donations of high value items such as cars and motorcycles may also be
          tax deductible and can help fund numerous student scholarships. We can
          turn your items into gear and track day scholarships via sale or
          raffle.
        </Fragment>
      ),
    },
    {
      title: 'Track Days:',
      text: 'You can even help grant scholarships by donating track day and training sessions.',
    },
  ],
]

export const ABOUT_PAGE = {
  section: {
    title: 'Board of Directors',
    cards: [
      [
        {
          name: 'Viki Garrett',
          title: 'Executive Director',
          text: `Viki Garrett learned to ride at the age of 52, she currently rides a Ducati Monster 821 and an MV Agusta Brutale 800RR.  She has done over 80K miles in under 4 years.  She is just as passionate about riders being in full gear and she is about the track and long distance solo riding. The kids of the motorcycle community are her only children and she is very protective of the Phoenix area motorcycle family which is why she founded CLTTF.`,
        },
        {
          name: 'Mary Lawson',
          title: 'Director',
          text: 'Mary Lawson is Coach Lawson’s mom.  She became a beloved member of the local motorcycle community after his passing. She now comes to the track regularly to cheer everyone on and tailgates to feed them!  Mary is an active member of the CLTTF board.  This grandmother of 2 hopes to become a motorcycle rider in the near future on Mikes MT09!',
        },
      ],
      [
        {
          name: 'Christian Ramirez',
          title: 'Director',
          text: 'Christian Ramirez served in the Marines from 2014 to 2018 and he lives with his fiance in El Mirage.  Christian has been riding motorcycles since March of 2019.  He has taken his MSF course and several training courses with a local trainer.  He has rapidly progressed, doing 9 track days, working the corners regularly at the track and his goal is to debut racing in 2021.  His example of extensive improvement through training and track days is the exact goal of CLTTF.',
        },
        {
          name: 'Roland Coy-Burt',
          title: 'Director',
          text: 'Roland Coy-Burt started riding at the age of 39 and soon thereafter totalled his bike on Yarnell Hill.  Roland proceeded to take EVERY training course he possibly could for the next 8 months.  He has vastly improved his riding and currently rides a Ducati V4 and a 959.  Roland hopes to do many track days in 2021!',
        },
      ],
      [
        {
          name: 'Chris Ardon',
          title: 'Director | 04/07/1986 - 12/23/2020',
          text: 'Chris Ardon joined the board shortly after Mike Lawsons death. Three months later Chris tragically passed. Chris had the most riding and track experience of any board member. He was a huge presence in the motorcycle family of Arizona. Chris’s two passions were his beautiful BMW S1000RR and photography. At the tracks or in the canyons he was constantly either riding, taking photos or working the corners. Chris Ardon will never be forgotten in our community and he will be honored with a posthumous position forever on the board of CLTTF.',
        },
      ],
    ],
  },
}

export const HOME_PAGE = {
  img: {
    src: 'https://mgx-photos.s3-us-west-2.amazonaws.com/lawson-ttf/Lawson_Logo_BW_OUTLINES.png',
    alt: 'CLTTF Logo',
  },
  section: {
    title: 'Coach Lawson Training and Track Foundation',
    text: '“Coach” Mike Lawson ignited a passion for riding motorcycles at the age of four years old, riding a trizinger. His father passed in a motorcycle accident when he was just six years old. Mike rode on and off all his life, on dirt bikes, stunt bikes, street bikes and finally track. He influenced many in our riding community and was a mentor to many track enthusiasts. His last track day everyone commented he was the happiest he had ever been. Mike even came home and told his Mom it was THE BEST DAY EVER. Two days later at the age of 37 Mike died in an accident in his favorite canyon. His legacy of mentoring will live on in CLTTF.',
  },
}
