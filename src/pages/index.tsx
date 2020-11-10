import React, { useRef } from "react"
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
  const dummyRef = useRef<HTMLDivElement>(null)

  return (
    <Layout>
      <SEO title="Home" />

      <Header>
        <Container>
          <HeaderCopy>
            <HeaderHeading>HELLO, I&apos;M HELGARD</HeaderHeading>
          </HeaderCopy>
        </Container>
        <HandCanvas
          navRefs={[
            dummyRef,
            useRef<HTMLDivElement>(null),
            useRef<HTMLDivElement>(null),
            useRef<HTMLDivElement>(null),
            useRef<HTMLDivElement>(null),
          ]}
        />
      </Header>

      <section>
        <Container>
          <div ref={dummyRef} style={{ width: "80%" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            voluptatum labore corrupti aut laudantium sint suscipit error
            aliquam molestias! Dolorem deleniti in itaque! Eveniet dignissimos
            mollitia distinctio nulla quidem perspiciatis porro, nisi nam
            voluptatum facere. Harum earum natus voluptatibus, omnis dolor ut
            explicabo itaque eius voluptates asperiores sed molestiae animi
            maxime cum optio esse sit. At perferendis placeat doloribus, officia
            accusantium labore iste. Repudiandae sed ratione corrupti eaque. Sit
            soluta placeat optio autem molestias alias voluptates nam fugit, ab
            ratione fuga beatae quae eveniet amet aliquam magni accusantium
            omnis! Repellat accusamus impedit fuga ab minima consectetur, neque
            explicabo quaerat ratione soluta quas molestias dolorum tempora
            magnam, ex a asperiores consequuntur consequatur natus. Quidem
            dolorum culpa accusantium, nam veniam placeat porro error
            consequatur ipsa iste quaerat veritatis maxime harum facilis,
            delectus at repellendus quo. Ducimus fugiat perferendis minus
            voluptatum voluptate maxime, veritatis explicabo facere doloremque
            omnis? Ut assumenda tempora maiores eum dolorem, totam minima
            deleniti deserunt praesentium possimus officiis iusto molestiae
            nostrum dignissimos esse voluptates ad quisquam sed beatae
            reiciendis autem enim sapiente magni! Voluptatum, reprehenderit rem
            nostrum ratione, iste qui maiores vero velit quo laborum autem
            magnam? Consequuntur alias distinctio voluptatum deleniti,
            reiciendis harum suscipit dolor tempore quaerat quam similique
            asperiores natus vero possimus qui, pariatur aperiam? Amet magnam
            itaque eius, alias beatae dicta ipsum sequi perspiciatis quia iure
            minima, ullam molestias numquam temporibus laudantium deleniti, sed
            dolorem ipsam eaque dignissimos est id? Id blanditiis nam quae
            doloremque assumenda nobis obcaecati minima dolore velit. Dolor
            totam id error quae cupiditate sit quis, commodi vero suscipit!
            Labore delectus, ex, nobis earum tenetur quo provident rem ut
            aliquid doloribus nisi voluptatum repudiandae recusandae maxime
            cupiditate adipisci explicabo asperiores harum. Quam vero doloremque
            repudiandae placeat quaerat cum aut iusto. Perspiciatis fuga nihil
            iste id illo ad ut tempore voluptates nisi consequuntur dolore saepe
            a harum sapiente hic, eos, sit quas consequatur voluptas. Explicabo
            culpa animi ipsa commodi libero unde? Corrupti assumenda dolor
            recusandae, dignissimos optio neque eius exercitationem labore
            temporibus sint at quo, beatae eveniet rem nisi aspernatur
            reiciendis ut quae iste deserunt? Aliquam expedita facilis eligendi
            quos beatae eum provident! Sequi provident consequuntur repudiandae
            numquam ipsum adipisci alias quidem, ullam maiores excepturi
            aspernatur officia iure temporibus ducimus necessitatibus officiis
            magni harum odio molestiae neque fugiat recusandae non? Inventore,
            repudiandae harum! Cum, tenetur? Perferendis, unde suscipit dolore
            in quasi nostrum ipsam facilis fugit reiciendis laudantium dolorem
            animi officia at consequatur maxime hic modi libero eos sit eaque
            numquam assumenda incidunt! Atque voluptatem aut aspernatur nobis
            rem pariatur adipisci eveniet fuga maiores debitis, ipsa dolore!
            Pariatur nihil reprehenderit doloremque ab porro voluptate tempore
            quo, sequi quidem corrupti rem cumque adipisci officia mollitia
            veritatis quisquam eos dolor, delectus, ratione saepe. Aut repellat
            dolorum natus voluptate fugit molestias minus enim necessitatibus
            officiis libero laboriosam deleniti, quia nisi temporibus sed
            inventore? Ipsam inventore minus minima quisquam ab! Minima
            delectus, nisi, autem ad sint molestias, vero enim ea accusamus
            adipisci pariatur est atque optio reprehenderit provident error modi
            sapiente expedita quam officia consequatur nostrum itaque excepturi
            quidem! Tempora aut facilis veniam quis nemo itaque, aspernatur est
            error enim fugiat ut quasi, reiciendis praesentium sunt porro,
            consequatur ipsum adipisci a aliquid. Nulla minus in delectus
            reprehenderit ullam dolore, dolor aliquid dolorem obcaecati sunt
            iure hic tenetur explicabo, nemo culpa ab voluptatibus iste.
            Dignissimos magnam vel mollitia nihil eum error commodi quis nostrum
            incidunt molestias consequuntur accusantium amet laborum aliquam in
            optio necessitatibus quod, libero aliquid quaerat! Eaque praesentium
            numquam qui dolor consectetur? Impedit, culpa qui? Dignissimos
            facilis ducimus quos necessitatibus, aperiam consequuntur vel
            numquam eveniet dolorum accusantium. Ut quo vel nostrum dolorum
            quibusdam natus amet sapiente, voluptatem blanditiis esse velit ad
            neque quasi error delectus debitis temporibus porro rerum, aliquid,
            consectetur veritatis at odit? Ipsam repellat dolorum modi cum
            veniam repudiandae totam ullam fugit excepturi voluptates corrupti
            cupiditate, esse reprehenderit aspernatur quis incidunt provident
            quod id. Explicabo ullam itaque inventore. Eligendi aliquid quam
            totam et dicta voluptatibus commodi saepe quisquam! Aperiam numquam
            debitis aliquam at laborum, consequuntur, perspiciatis quisquam nam
            adipisci quidem tempore. Excepturi ducimus soluta est facilis
            commodi, nobis asperiores voluptatibus saepe corporis itaque qui
            rem, fugiat quam assumenda odio. Nobis similique aliquam iste illo?
            Minima quaerat voluptate, magni consectetur voluptatibus consequatur
            architecto laudantium libero beatae provident amet? Ut doloribus qui
            maxime quo velit laboriosam, similique minus quidem recusandae autem
            magni quibusdam facere esse quos illum dolorem! Culpa, porro dolorem
            est nobis quia odit sequi labore nihil laborum doloremque ex et
            deserunt, a reprehenderit dicta earum quis! Molestiae, earum. Sint
            nisi labore libero, eum animi ullam ea, esse similique quam quo aut
            illo hic excepturi non suscipit quos? Ipsum temporibus minima eum
            qui in nostrum quisquam excepturi totam amet, molestias, nihil dicta
            beatae ea, odio aliquam tempora accusamus id at aperiam. Ad maxime
            libero unde repellat accusantium officia maiores dicta, optio,
            facere officiis sed accusamus praesentium explicabo necessitatibus
            ea. Adipisci saepe neque odio inventore asperiores eveniet molestias
            error, culpa repellendus cum voluptates libero enim blanditiis
            beatae laboriosam, incidunt ad repellat mollitia animi? Atque minus
            eveniet suscipit enim itaque accusamus molestiae hic eum. Quibusdam
            distinctio natus consequuntur perspiciatis aspernatur mollitia
            dolorem laborum earum rerum possimus? Minima illum, et sunt aut
            aliquid ad suscipit quod molestias, vel, a dolore fuga ab expedita
            praesentium. Necessitatibus, est assumenda reiciendis voluptates
            officiis corrupti corporis adipisci! Ipsam omnis impedit, fugit,
            dolore temporibus dolorum laborum vel nam eveniet provident sit
            dolores sint voluptates maxime dignissimos reprehenderit saepe?
            Doloremque veritatis dicta natus blanditiis nobis itaque saepe
            accusantium adipisci et rerum. Delectus beatae ipsam reiciendis aut
            eligendi enim at nihil, quo quidem? Quisquam ipsa omnis molestias
            adipisci! Ipsam deserunt expedita, reprehenderit perferendis sit
            error, corporis dolorum assumenda nihil, ullam debitis? Rerum
            dolorem, dolorum sequi ab itaque placeat dolor eveniet totam,
            quisquam, tenetur est eius facere illum ipsam consectetur
            voluptatibus. Voluptate laborum explicabo distinctio, ad praesentium
            quis facilis? Odio tempore dicta fugit assumenda eum eaque
            praesentium ratione, ipsum, maiores reprehenderit quisquam officiis
            voluptates libero et debitis! Numquam in odit quas voluptas
            suscipit, qui perferendis harum eum ullam iusto inventore laudantium
            laboriosam tempore magni facere ab ad quibusdam? Debitis veritatis
            sapiente et ad maiores velit delectus repudiandae ipsam voluptate
            facere nobis illum in culpa numquam officia ipsa, modi odit laborum
            maxime exercitationem molestias error hic possimus eveniet. Sint
            sequi odit soluta explicabo libero, nihil provident nisi maxime,
            iure error fugiat officia esse. Placeat ad non, repudiandae tempore
            asperiores error doloribus aspernatur iusto necessitatibus expedita
            magni sequi assumenda a cupiditate odio dolor omnis ipsa
            voluptatibus consequuntur nam velit, incidunt saepe similique.
            Dolorum quaerat, dolores vero facilis consequatur illum praesentium
            minus rem aperiam placeat deleniti eum ut? Ullam, architecto
            voluptatem quas blanditiis illo, labore corporis omnis minima
            tenetur et ratione voluptatum soluta dignissimos amet similique
            consectetur quibusdam esse hic id minus! Cupiditate id maxime, fuga
            corrupti nostrum earum sunt nam explicabo deserunt, cum minus
            praesentium expedita aspernatur dolorum neque et hic veritatis
            excepturi. Ad harum iste laudantium earum sed. Sequi, nulla iste
            inventore aperiam adipisci animi laboriosam, molestias blanditiis
            hic nemo doloremque obcaecati nam similique repudiandae, excepturi
            natus harum? Odio in, vero iusto rem quos hic consequatur aliquam
            vel est ad corrupti voluptate a, recusandae nam, tenetur saepe ea
            excepturi aperiam sint nesciunt quas quasi? Officiis iste quod eaque
            voluptas et deleniti debitis sunt magnam modi, soluta, eos quasi
            autem exercitationem explicabo laboriosam ad accusamus dignissimos
            quia minima nulla suscipit quae aliquid. Nulla veritatis obcaecati
            dolorum, ad, voluptatibus dicta at aliquid voluptate voluptates,
            possimus veniam repellat tenetur sint animi aspernatur facere
            tempora non itaque ab consequuntur eligendi facilis quisquam culpa
            quo! Enim deserunt est quaerat, quisquam ut laborum quod dolorum
            sunt cum aliquam doloremque, provident inventore non? Dignissimos
            consectetur, dolores fuga laboriosam possimus animi aut optio
            debitis repellat facere delectus modi ad vel consequatur? Cum fugiat
            placeat vitae iusto dolore ratione, labore sit esse ducimus
            inventore, architecto repellat aspernatur veniam quisquam deserunt
            in rerum sunt. Dicta, adipisci corrupti, quae voluptatibus ipsam
            eius libero odit commodi ex accusamus, quo similique assumenda
            maiores. Vitae tenetur dolores ratione deleniti minima corporis
            adipisci nam optio magnam tempore repellendus, in reprehenderit
            minus reiciendis, incidunt corrupti ut omnis veniam ipsa quasi modi?
            Error enim quaerat delectus distinctio incidunt? Fuga quibusdam
            fugit eos aliquam consequatur perferendis autem. Error iste,
            voluptatibus quo ab officia nobis architecto esse veniam tempora,
            at, est reprehenderit quaerat quae ipsum magni similique
            repudiandae. Error porro, dignissimos perspiciatis quam accusantium
            vitae. Ex error corporis omnis veritatis consequuntur, iste, eos
            consequatur obcaecati ipsam nemo itaque, ut hic quam consectetur.
            Non, sint magni dignissimos ullam obcaecati illum saepe nihil vitae
            consectetur iste. Eveniet asperiores excepturi harum sunt culpa qui
            tenetur. Dignissimos, ab esse sed velit mollitia tenetur ex officiis
            excepturi dicta, adipisci accusamus tempore, dolorum animi odio
            eligendi doloremque iste corrupti sapiente quas. Velit aliquam
            consectetur facere qui soluta. Voluptas minus eveniet amet vel,
            quisquam magnam itaque soluta doloribus, possimus eius quidem
            tenetur iusto facilis? Laboriosam nisi tempore placeat maxime. Sit
            ut aspernatur neque qui laudantium, fugiat necessitatibus eveniet
            voluptatum quibusdam incidunt maxime. Cupiditate, iusto mollitia.
            Maiores blanditiis eius saepe, magnam at provident vero repudiandae
            amet impedit mollitia aspernatur ipsam quam odit architecto
            inventore nostrum porro aliquam reiciendis modi laudantium nulla rem
            quae doloribus. Nemo, iure. Ipsa explicabo assumenda rerum libero
            modi possimus id. Veniam molestias reprehenderit aliquam eum neque
            nulla tenetur quidem sed aliquid a vel, atque enim. Quae deserunt,
            porro facere at reiciendis aspernatur iusto quod totam quam eligendi
            quia laborum et delectus libero sint? Cumque nobis repellendus, nemo
            vel nulla nesciunt, adipisci perferendis doloremque fugit cupiditate
            voluptas excepturi, dolores temporibus quaerat ipsa? Tenetur,
            excepturi alias provident exercitationem ipsam eligendi fugit porro
            culpa iure corrupti dolorum, eos esse voluptates explicabo vel.
            Labore accusantium doloribus placeat pariatur explicabo voluptate
            autem nisi. Molestias, quo assumenda, odio natus amet ipsum minus
            libero, laborum accusantium itaque eligendi. Excepturi cumque vitae
            modi dicta reprehenderit facilis assumenda quidem et, voluptatum
            voluptatem asperiores fugit officia fuga aliquid at? Quia ipsam
            optio ullam fugit nemo dolorum velit iure itaque, rem ab! Obcaecati
            magnam officiis quae voluptate sit molestiae nostrum deleniti nemo
            quos at hic molestias asperiores ducimus error, voluptatum
            repellendus harum? Alias distinctio ex quibusdam? Reprehenderit iste
            mollitia doloremque, dolorem voluptas omnis, cumque necessitatibus
            quisquam sunt enim officiis, facilis incidunt. Cum expedita
            molestias reprehenderit laborum similique harum vero dignissimos
            provident velit natus, quam delectus possimus aspernatur, rerum
            porro placeat ullam consequatur facere quas est! Mollitia reiciendis
            veniam voluptatum nam perferendis, officia repudiandae earum
            debitis! Sunt totam amet ea repudiandae aliquam quam saepe
            praesentium nemo possimus, illum excepturi voluptates, ipsa commodi
            aliquid illo. Corrupti illo sint fugit cumque! Rem, accusamus quidem
            eos provident explicabo eveniet architecto laborum porro quos a
            doloremque magnam totam mollitia vel ex. Accusamus minus laborum
            fugit! Debitis sequi esse deleniti voluptatum commodi fugiat est
            itaque dolorum labore, magnam temporibus aliquid ea suscipit, animi
            eaque. Eos quas quaerat delectus, consequuntur saepe ratione quam
            nam error eaque maxime omnis in dolorum rerum, adipisci, hic sint
            perferendis cupiditate inventore quibusdam eum. Nihil, laboriosam
            nemo excepturi rem molestiae tenetur commodi non distinctio dolores
            autem quidem possimus ducimus doloremque eum inventore blanditiis
            repudiandae dolore! Iste ipsam dignissimos quidem pariatur impedit
            quaerat, incidunt illo maiores perspiciatis modi, aliquid assumenda,
            quia explicabo tempora? Fuga dicta quibusdam ipsam ad dolores facere
            et illum pariatur neque facilis, harum, eligendi saepe voluptatum
            dolorum rerum beatae tempore sint totam illo consectetur eius sit
            quo excepturi earum? Nostrum fugiat blanditiis quis soluta aliquam
            culpa iure ab earum ad expedita itaque dignissimos, iste amet,
            perspiciatis illum quaerat eligendi est doloribus, magni reiciendis
            corrupti repellat laboriosam sapiente impedit. Optio non fuga
            dolorem sit, assumenda sed perferendis reiciendis atque repudiandae
            quae unde ipsum vel ullam temporibus expedita dolores, ab suscipit
            quaerat dolor fugit vitae cum! Officia, qui sequi. Saepe impedit
            magni aut repudiandae aliquam harum cumque quam. Id neque impedit
            veniam nam modi velit, ipsum maiores temporibus saepe aut veritatis
            labore obcaecati vel repellat nisi quidem tenetur minus. Eius,
            voluptates tempora voluptatem, quis minus molestiae eaque minima, et
            libero atque temporibus quod magni itaque dolores blanditiis animi
            reiciendis autem doloribus. Ut placeat quisquam quo recusandae dicta
            repellat eius iste vero voluptatum, accusantium eaque! Laborum quam
            vero soluta at dolorum ab voluptatibus, facere optio? Pariatur,
            iusto.
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default IndexPage
