import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HandCanvas from "../components/webgl/handCanvas"

/* const HeaderHeading = styled.h1`
  position: absolute;
  top: 0;

  font-size: min(16vw, 300px);
`

const ArtistName = styled.h2`
  position: absolute;
  bottom: 0;

  font-size: min(23vw, 430px);
` */

const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  max-width: 1800px;
  padding: 0 120px;
`

const HeaderCopy = styled.div`
  height: 100vh;
`

const HeaderHeading = styled.h1`
  position: absolute;
  z-index: -2;
  top: 50%;
  transform: translateY(-50%);

  font-size: 150px;
  line-height: 100%;

  /* user-select: none; */

  max-width: 50%;
  margin: 0;
`

const Header = styled.header`
  position: relative;
  height: 100vh;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header>
        <Container>
          <HeaderCopy>
            <HeaderHeading>HELLO, I&apos;M HELGARD</HeaderHeading>
          </HeaderCopy>
        </Container>
        <HandCanvas />
      </Header>

      <section>
        <Container>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            facere iusto itaque totam quia delectus deserunt error perferendis
            officia dolorem illo esse dolor incidunt, suscipit tenetur fugit?
            Eligendi quisquam officia quasi vel dolor? Hic porro consectetur
            culpa laboriosam inventore excepturi corporis aliquam quibusdam
            voluptates asperiores placeat dolorem sint repellendus ipsum beatae
            nam maxime commodi quasi, ea accusamus voluptas earum nobis
            voluptate? Quaerat commodi vero nihil voluptatem in modi laudantium
            assumenda debitis obcaecati at delectus tempore, optio voluptate
            magni atque soluta ratione adipisci quo, nam fuga pariatur et vitae,
            quod nisi. Debitis sequi molestiae aspernatur dignissimos, hic
            eligendi architecto perspiciatis distinctio nulla beatae dolorem
            aut! Quam deleniti, aliquid recusandae tempore voluptates maxime
            omnis rerum quisquam, laborum eveniet inventore ipsum suscipit
            facilis minus voluptas consectetur? Fuga voluptatibus ipsum dolorem,
            aspernatur cumque autem magni nobis accusantium, delectus dolores
            iste, aliquam alias voluptates nam! Velit nobis sed quod labore
            facilis provident quis voluptatum inventore reprehenderit officia
            doloremque quo nisi voluptatibus minima delectus ipsa, distinctio
            perspiciatis modi explicabo at? Doloremque ea odio, totam ipsam
            dolorum quidem atque, nulla rem velit et in excepturi itaque. Alias
            iusto cumque facilis perferendis harum saepe sint dignissimos
            fugiat. Facilis, nihil vero dignissimos dolorem distinctio omnis rem
            neque, eius expedita labore necessitatibus. Sequi facere maiores
            odio molestias aperiam quae facilis. Illum dolore deserunt excepturi
            nobis, ut minus saepe alias exercitationem officia fugit, vero
            incidunt. Sunt numquam dolor ipsam. Suscipit excepturi vero non
            eligendi natus ut accusantium quaerat repudiandae aspernatur ab
            facere unde hic fugit, nam enim praesentium eius repellat cupiditate
            omnis, sit nulla esse temporibus beatae aliquam! Quas eligendi fugit
            quasi dolores labore distinctio, dolore ipsum necessitatibus,
            perferendis laborum dolorum. Nihil, officia perspiciatis
            reprehenderit voluptate ut deleniti id, harum ducimus perferendis
            laudantium ullam fuga voluptatem maxime maiores, optio iste. Ratione
            laboriosam in at necessitatibus porro possimus repellendus! Sequi
            vitae officia odit impedit commodi, non doloremque ut vel hic nihil
            dolorem itaque amet error cupiditate voluptas quos? Nesciunt nulla
            laudantium cumque et eaque corporis sunt quos, fuga alias soluta,
            quas ipsum deserunt unde, maxime consectetur voluptas ipsam! Tenetur
            reiciendis voluptatibus voluptatem reprehenderit aspernatur
            excepturi dicta officiis consequuntur magnam placeat, omnis
            cupiditate aperiam ab aliquid, ea at accusantium incidunt rem! Qui
            alias, aliquid ab quae, animi nobis, tempora debitis vero omnis
            reiciendis quod atque. Aliquid ratione quae excepturi illum
            accusantium labore eum quasi, officiis dignissimos delectus
            perspiciatis quos saepe quidem inventore architecto eligendi harum
            iste praesentium voluptas voluptatem at. Modi consectetur enim
            repellat aperiam libero blanditiis nostrum quod. Harum quod
            nesciunt, corrupti, ab molestias sequi laborum suscipit id, animi
            deleniti inventore. Eveniet blanditiis cupiditate eos alias porro
            officiis laboriosam. Suscipit impedit in, magni natus exercitationem
            deleniti. Nihil facilis pariatur impedit praesentium sequi labore
            quaerat quod rem itaque laboriosam at, voluptas explicabo suscipit
            error deserunt quae atque accusantium architecto totam nesciunt
            magni. Explicabo sapiente deleniti dignissimos nulla, doloribus
            inventore perspiciatis iure soluta quam error fuga sunt recusandae
            atque cum esse officiis. Tenetur officiis nobis tempora qui vero
            voluptatibus molestiae possimus quis excepturi. Obcaecati sunt
            debitis dolorum eaque officia ab dignissimos amet corrupti velit
            dolor perspiciatis doloremque adipisci unde, cumque quod voluptas
            provident consequatur aut repellendus quae error, itaque, id quia!
            Nemo et quis optio, perspiciatis ut suscipit saepe ducimus? Maxime
            cupiditate officia eaque autem, quisquam dolore possimus quasi porro
            aperiam tenetur culpa vero quia libero accusantium sed ipsam quo
            officiis debitis reprehenderit, iste ea amet. Fuga saepe, ipsam a,
            velit labore mollitia, excepturi exercitationem possimus
            consequuntur facilis totam repellendus at molestias nihil
            praesentium ducimus. Est quae nam perferendis totam corporis sit
            similique harum eligendi veritatis consectetur! Aliquam, quia non
            voluptatum tempora, beatae itaque, quod dignissimos aspernatur dicta
            facilis cupiditate illo debitis nostrum? Vero, fuga veritatis porro
            alias enim ipsam velit unde ullam earum iure. Ab inventore debitis
            sequi repellendus eos eveniet tempora nostrum reiciendis error
            expedita earum sit iure asperiores dolor, recusandae eaque nihil
            possimus veritatis. Expedita necessitatibus nam eligendi ratione
            enim, nisi, iure nemo minima laboriosam quas harum minus veniam!
            Fuga tenetur, magni blanditiis aperiam incidunt consequatur ea
            numquam error similique facere eligendi earum hic ab ipsa
            perferendis dignissimos, doloremque nemo inventore ducimus facilis
            nam asperiores quas. Voluptatum qui molestiae minima, ipsum earum
            voluptatem nisi excepturi veritatis ex molestias sint deserunt
            fugiat illo quidem tempore assumenda dicta eaque hic quibusdam
            ullam? Ipsum facere saepe voluptas perferendis perspiciatis illum
            doloremque pariatur sequi quam recusandae commodi vel accusamus iure
            quae itaque quas dolorem, consequuntur earum quaerat aliquid
            consectetur asperiores ipsam aspernatur voluptatum? Tenetur
            similique quod enim dicta amet iusto ratione ea. Sed blanditiis
            dolorem similique recusandae? Quam, excepturi facilis laboriosam
            corporis, nihil quae minima impedit reiciendis earum alias omnis
            voluptatem, tempora hic aliquid nobis optio assumenda tempore quos
            illo voluptatibus maiores quasi! Unde atque quo distinctio minus
            eligendi fugit, doloremque maiores dolor enim! Totam culpa, placeat
            neque laboriosam dolorem laborum. Quas iusto at, aliquid voluptate
            minima laudantium nostrum totam commodi aperiam maxime cumque dolore
            voluptatem eum voluptatibus dolores veniam molestiae fugiat aliquam
            accusantium. Ratione sed a repudiandae doloribus, vero facilis
            suscipit quo impedit maiores officia rem beatae, laudantium
            perspiciatis aspernatur ipsa! Provident odit fugiat incidunt rerum
            odio aliquid quae nesciunt quas molestias iste natus ullam, illo id
            officia similique eos blanditiis est dignissimos earum, expedita
            soluta? Minus nihil ratione quas amet veritatis a laudantium
            perspiciatis quidem eum magni, modi, dignissimos ipsum aperiam
            sequi, molestias aliquid. Error dolor earum assumenda corporis
            delectus id. Illum possimus perspiciatis rerum impedit nam alias
            quidem itaque fugiat. Cumque magnam nemo voluptas corporis, earum
            repellendus quam ut quas voluptate natus ab placeat alias distinctio
            eligendi exercitationem, delectus saepe deserunt! Corporis nihil
            ipsam, error architecto ut sunt dolorum voluptates blanditiis alias
            facere! Saepe culpa necessitatibus, quod placeat harum similique
            modi aperiam minus, dolores, eum voluptatem explicabo autem. Tenetur
            placeat neque quaerat quam commodi magni a voluptate impedit harum
            nulla quas molestiae excepturi est quisquam, illo saepe in alias!
            Reprehenderit et alias libero minima ab nemo voluptate impedit
            eligendi officiis tempore! Consectetur labore possimus dicta a
            voluptates odio assumenda expedita animi, officiis reiciendis magni
            asperiores provident dolor omnis vel adipisci distinctio illo
            quaerat voluptas fuga, dolorem porro. Ut, quasi. Ea, magnam
            obcaecati?
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default IndexPage
