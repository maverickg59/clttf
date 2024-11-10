import { Container } from '@/components/Container'
import {
  DoubleRowBentoGrid,
  TopLeftDoubleRowBentoBox,
  TopRightDoubleRowBentoBox,
  BottomLeftDoubleRowBentoBox,
  BottomRightDoubleRowBentoBox,
} from '@/components/Bento'

const boardMembers = [
  {
    name: 'Viki Ducati',
    title: 'Executive Director',
    description:
      "Viki began riding at age 52 and proudly rides a Ducati Monster 821, a Yamaha FZ-09, and a Honda Grom. She's logged over 180,000 miles since her first ride. She's deeply passionate about riders wearing gear and equally dedicated to both track riding and long-distance solo adventures. She's fiercely protective of the Phoenix motorcycle scene—a commitment that inspired her to found CLTTF.",
  },
  {
    name: 'Mary Lawson',
    title: 'Director',
    description:
      'Mary, Coach Lawson’s mother, became a cherished figure in the local community after his passing. Now a regular at the track, she enthusiastically cheers on the riders and hosts tailgate parties to keep everyone fed. Mary is an active CLTTF board member and proud grandmother of two!',
  },
  {
    name: 'Christian Ramirez',
    title: 'Board Member',
    description:
      'Christian, a Marine veteran, lives with his fiancée in El Mirage. He began riding motorcycles in March 2019 and has since immersed himself in skill-building. His progress includes dozens of track days, regular corner work at the track, and obtaining an ASMA race license. Christian’s commitment to growth through training and track experience embodies CLTTF.',
  },
  {
    name: 'Ginger George',
    title: 'Board Member',
    description:
      'George is an avid track rider, track marshal, and regular volunteer in the motorcycle community. He takes pride in encouraging riders to prioritize safety, no matter the riding conditions.',
  },
]

const moreAboutGeorge =
  "George is an avid track rider, track marshal, and regular volunteer in the motorcycle community. He takes pride in encouraging riders to prioritize safety, no matter the riding conditions. He's a regular at the track, where he's known for his dedication to safety and his commitment to helping riders improve their skills. George is a proud member of the CLTTF board and a dedicated volunteer in the local motorcycle community."

export function Team() {
  return (
    <section
      id="team"
      aria-labelledby="team-title"
      className="py-20 sm:my-32 sm:pt-32"
    >
      <Container>
        <h2
          id="team-title"
          className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-zinc-900 sm:text-5xl"
        >
          About the Team
        </h2>
        <DoubleRowBentoGrid>
          <TopLeftDoubleRowBentoBox {...boardMembers[0]} />
          <TopRightDoubleRowBentoBox {...boardMembers[1]} />
          <BottomLeftDoubleRowBentoBox {...boardMembers[2]} />
          <BottomRightDoubleRowBentoBox {...boardMembers[3]} />
        </DoubleRowBentoGrid>
      </Container>
    </section>
  )
}
