import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'

import Image from 'next/image'
import previewImage from '../../assets/previewImage.png'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Descomplique sua agenda | Ignite Call"
        description="Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre"
      />
      <Container>
        <Hero>
          <Heading as="h1" size="4xl">
            Agendamento descomplicado
          </Heading>
          <Text size="xl">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre!!!!
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
    </>
  )
}
