import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'

import Image from 'next/image'
import previewImage from '../../assets/previewImage.png'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.!!!!
        </Text>

        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image
          src={previewImage}
          quality={100}
          height={400}
          priority
          alt="Calendário simbolizando aplicação em funcionamento"
        />
      </Preview>
    </Container>
  )
}
