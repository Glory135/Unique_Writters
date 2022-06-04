import { CommentOutlined, ThumbUp } from "@material-ui/icons";
import React, { useContext } from "react";
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";
import Comments from "../../Components/Comments/Comments";
import { Context } from "../../Context/Context";
import img from "../../images/img-7.jpg";

export const SinglePost = () => {
  const { theme } = useContext(Context);
  return (
    <div className='page'>
      <div className='breadCrumb-container'>
        <BreadCrumbs
          payload={[
            { path: "home", link: "/" },
            { path: "singlePost", link: "/singlePost" },
          ]}
        />
      </div>
      <div className='singlePost-body'>
        <div
          style={{ backgroundImage: `url(${img})` }}
          className='post-img-container'
        ></div>
        <div className='post-title-container'>
          <h3>This Is the title of the Story</h3>
        </div>
        <div className='post-desc-container'>
          <div className='post-desc-item author'>Author: Bolaji Blessing </div>
          <div className='post-desc-item time'>1st May, 2022</div>
          <div className='post-desc-item actions'>
            <div className='action-item'>
              <ThumbUp className='icon' />{" "}
              <span style={{ backgroundColor: theme.primary }}>2508</span>
            </div>
            <a href='#comments'>
              <div className='action-item'>
                <CommentOutlined className='icon' />{" "}
                <span style={{ backgroundColor: theme.primary }}>250</span>
              </div>
            </a>
          </div>
        </div>
        <div className='body'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur qui
          expedita facere optio eos amet suscipit nam eligendi quas. Minima vero
          eveniet dolore doloribus ex cum ullam sit expedita deleniti enim eos
          vitae pariatur, voluptas quia animi recusandae veritatis, delectus
          amet voluptatum itaque quae laborum neque. Aliquid placeat illum
          libero ex reiciendis! Incidunt, ex. Suscipit dolores, ratione neque
          sint obcaecati nihil assumenda corporis quidem accusantium quod fugit
          reprehenderit ducimus nemo alias aperiam quae quisquam odio porro
          nesciunt, modi incidunt. Harum, cum dicta recusandae beatae tempora
          sint, quas quo veniam est in unde ratione illo libero repellendus
          rerum non. Aliquid a omnis, illo distinctio cumque natus unde nesciunt
          excepturi molestiae consequuntur magnam repudiandae. Voluptatum
          explicabo accusantium eaque placeat nihil error corrupti laboriosam
          quibusdam nam, sint possimus soluta quasi laborum tempore dolorum ut
          minima illum cupiditate saepe? Unde iusto, maxime delectus commodi
          laborum voluptatum totam temporibus corrupti blanditiis quia! Itaque
          delectus ullam distinctio. Laboriosam corrupti sit iusto delectus,
          iure expedita soluta rerum obcaecati libero. Excepturi ex, maxime
          neque accusamus, facilis aliquam aut tenetur temporibus totam numquam
          eveniet fuga voluptate reiciendis a laboriosam placeat praesentium
          nostrum expedita doloremque quos vero nihil. Dolorum saepe obcaecati
          ex sit tempora, accusamus eum qui. Optio facere ipsam nulla ad maxime
          laboriosam consequuntur consectetur animi, atque autem porro
          voluptates, nihil doloribus incidunt perspiciatis cumque
          reprehenderit. Repudiandae, illum, rem officia distinctio id quisquam
          eum eveniet repellat, odio eligendi voluptatum tenetur! Error, debitis
          obcaecati? Quam, expedita. Ad quisquam rem labore harum consequatur
          cupiditate pariatur, quia vitae reiciendis provident neque in ea
          architecto magnam molestiae quod eos repellat ab mollitia nostrum
          autem. Dolore similique atque tempore doloremque id quod officia
          molestias molestiae iure dolorum quae, rerum sit ducimus, perspiciatis
          ipsam. Illum eos debitis odio est voluptatum. Rerum possimus aperiam
          dolores similique vitae dolor sed ipsa commodi nobis tenetur ducimus
          voluptatum reiciendis blanditiis cum impedit libero at asperiores, eum
          voluptates explicabo doloribus! Expedita ad natus quisquam omnis
          quidem harum doloribus laborum, sit, architecto recusandae rerum ipsum
          molestias nostrum error voluptate commodi minima sequi! Aspernatur
          nostrum ullam sed dolorum, excepturi voluptatem omnis veritatis nam
          repellendus pariatur quisquam accusamus ad quos eos! Adipisci, eius.
          Culpa rerum iure praesentium totam consequatur, amet debitis eum
          maxime tempore sapiente delectus nihil nam sed! Fugiat vitae totam,
          repudiandae deleniti tenetur officia iure qui eaque modi vel quo amet
          velit ullam doloremque expedita nobis dolor, neque ad asperiores eos
          dolores illo? Aut aspernatur aperiam magnam qui dolore alias laborum
          est. Distinctio error possimus totam optio cumque autem sint adipisci
          nihil excepturi? Sit alias quaerat iure inventore vero. Omnis, porro
          neque alias velit, tempora nisi hic aliquid distinctio odio quo et,
          corporis eos quae illum nobis provident ex id laborum perspiciatis
          quia perferendis aut. Alias in asperiores veritatis laboriosam nulla
          provident sunt explicabo eos, quod porro molestias voluptatem at
          recusandae fugit temporibus unde iure dolorum, ducimus quaerat. Amet
          doloremque voluptatem voluptates. Autem deserunt assumenda facilis
          incidunt debitis sit natus at iste nesciunt aperiam minus officiis
          quia nulla distinctio fugiat doloribus, explicabo harum inventore
          voluptatibus ex dolores non. Nulla quibusdam doloremque perspiciatis
          nostrum quidem facere soluta eligendi in ipsa voluptatem reprehenderit
          temporibus, deserunt quos ipsum, magni, commodi fugit quisquam. Nisi
          natus corporis quos ratione inventore velit quas, possimus enim
          expedita similique laudantium, praesentium deleniti eum quam et
          accusantium iusto! Cum adipisci fugit praesentium eveniet, nihil
          tempore veritatis enim doloremque ipsum neque laborum quibusdam
          temporibus unde doloribus repellat animi, cumque qui voluptatibus nisi
          asperiores earum, dolorum molestias? Corporis aut optio fugit et animi
          dolorem voluptatem quas ullam, sit numquam eveniet quidem! Doloribus
          laudantium totam distinctio! Obcaecati placeat similique pariatur
          asperiores aliquam maiores neque, officia quaerat est aliquid, ullam
          eveniet facere consectetur reprehenderit non excepturi fugit.
          Molestias fugiat velit dolor necessitatibus, deserunt soluta voluptate
          dolorem modi excepturi consectetur facilis consequatur quasi vel eum.
          Recusandae consectetur porro officiis corporis animi corrupti
          perferendis, aliquam tempora odit? Veritatis deserunt itaque harum id.
          Consequuntur facere magnam laboriosam beatae sit aspernatur. Obcaecati
          harum ad vel minus dolor itaque culpa ullam voluptatem voluptas
          consequatur, dignissimos, fugit recusandae debitis, repellat odio
          aperiam maiores qui eum sint aut! Odio veritatis atque incidunt
          nesciunt explicabo a exercitationem in aliquam facere autem at, qui
          asperiores maxime ex itaque velit consectetur saepe, magnam, veniam
          eius. Aut esse eaque neque repellat laboriosam explicabo, rem,
          aspernatur inventore voluptates, excepturi facere commodi recusandae
          numquam exercitationem officiis ipsam error accusamus quibusdam? Eius
          provident error facere repellendus molestias? Omnis, dolorum. Eum
          voluptatem maxime qui tenetur quisquam, quos sunt itaque voluptatum
          iusto voluptatibus animi! Dolor repellendus voluptate nulla officia
          ducimus est laborum consequuntur, possimus, sequi placeat fugiat.
          Assumenda voluptas, illo esse quos natus voluptate, mollitia possimus
          alias veritatis harum aliquam nesciunt vel perferendis? Amet
          consequuntur, eius in quod fugiat facilis suscipit reiciendis totam
          optio velit, cum nostrum at, animi doloremque id corporis! Maxime,
          reprehenderit delectus! Velit fuga est veritatis nobis odio facilis
          magnam perferendis inventore omnis, ipsam sunt eveniet saepe alias
          obcaecati nisi tempora voluptatum ipsa fugiat harum. Qui, recusandae
          non facere rerum cupiditate vel dolorum velit hic necessitatibus
          dolorem veritatis molestias tempore, consequuntur mollitia nulla ex!
          Autem esse omnis dolorum eum animi similique nostrum ipsam
          exercitationem et sequi quia illum aliquid dolorem, perspiciatis minus
          itaque hic fugit est cum? Quia nam eum dicta amet nulla repudiandae
          illum culpa impedit eaque ipsam, alias dolores quidem soluta porro
          neque! Architecto vitae voluptatum saepe est consectetur accusantium,
          sed labore cum odit ea corporis at rem illo nam nobis fugit
          praesentium amet ipsam dolore omnis. Sequi, et enim perspiciatis
          laboriosam pariatur eius earum adipisci culpa odio asperiores ea sed
          qui iure deleniti aspernatur quasi. Voluptate praesentium cumque
          suscipit. Debitis, iure dolorum assumenda voluptatibus fugiat rem
          ipsum architecto non dolorem amet ab molestias maiores quae sit!
          Dignissimos dolorem assumenda soluta perspiciatis inventore vel
          consequatur facilis autem ratione. Eum dolorum repudiandae suscipit
          quos iste dolorem blanditiis animi aliquid exercitationem obcaecati
          ipsum quam assumenda reprehenderit non atque quibusdam et sunt
          consectetur reiciendis fuga, tempora, debitis minus sit tenetur? Velit
          blanditiis odio dolorum perspiciatis cum minima et est consequuntur
          autem labore! Quo quisquam ex aut minus adipisci, doloremque ad rem,
          corrupti facere, debitis aliquam laudantium aperiam dolore laborum.
          Reiciendis expedita iste nemo unde totam debitis aliquid veniam quis
          suscipit, quod eius repudiandae minima dolore adipisci dolorum
          excepturi. Incidunt architecto veniam a minima blanditiis cumque sit,
          expedita pariatur distinctio velit odio eveniet odit? Eos similique
          repellat placeat, facere quos doloremque, ipsum tenetur recusandae
          fugiat quo sunt cum voluptatem inventore! Et rem nulla dolore fugit
          officia perspiciatis autem, eum eaque natus soluta consequatur
          quisquam, aliquid ut error, voluptas adipisci. Quod necessitatibus
          esse temporibus maxime, corrupti sint sequi voluptates consequatur nam
          in, minus officia dolore ipsa aliquam unde rerum. Earum quia commodi
          blanditiis expedita, inventore alias vitae aliquam magnam laudantium
          iusto temporibus, iste asperiores facere quas atque rem perspiciatis
          adipisci. Vero ipsam neque voluptatum fugiat corporis ab numquam sit
          autem iusto pariatur natus debitis similique repellendus magni
          molestias excepturi quaerat earum ex, officia recusandae ipsum
          consequuntur dolor quidem? Quaerat debitis omnis excepturi amet
          expedita harum explicabo minus? Recusandae ab rem neque doloremque
          reprehenderit tempora itaque fuga aliquam, vitae molestiae eius, porro
          reiciendis voluptate quisquam a tenetur ipsa laudantium sit impedit.
          Vel possimus velit ea delectus expedita veniam ipsam, sapiente libero
          accusantium dolor mollitia eligendi fugit vero, provident quae facilis
          ipsa eum ratione debitis officiis quaerat sit aliquid placeat
          dignissimos. Quis aperiam aspernatur eveniet ipsum fugit reprehenderit
          atque omnis vel nostrum quisquam iusto illum enim voluptate ea quia
          accusantium reiciendis libero nisi, veniam assumenda consectetur nobis
          maxime modi hic. Commodi fugiat incidunt unde sunt excepturi illum
          repellat id, consequatur modi earum totam vel deleniti soluta. Magni,
          eos deleniti eaque, accusamus, iste corporis atque quis explicabo
          alias perspiciatis totam voluptatem repellendus incidunt. Dicta
          voluptatum veritatis id at? Rerum dicta aperiam sit! Enim
          exercitationem beatae expedita nemo perspiciatis possimus minus
          tempore voluptate rerum eveniet, autem nihil error excepturi porro hic
          incidunt aut accusamus architecto explicabo! Ducimus explicabo optio
          doloribus voluptate distinctio voluptatem excepturi a! Maxime a
          deleniti sunt blanditiis labore distinctio eum assumenda unde placeat
          ex nisi vero quisquam impedit veniam neque quidem illum perspiciatis
          ut, laborum dolorum saepe dignissimos harum nam excepturi! Quam culpa
          provident eligendi, neque nesciunt sequi quia mollitia iste, nihil ut
          aliquid. Debitis maxime dolor quos, repellendus necessitatibus quidem
          fugiat veritatis repudiandae, saepe officia commodi reiciendis ullam
          dolore, sequi exercitationem. Mollitia modi voluptas possimus
          aspernatur, voluptate praesentium iure, quaerat eligendi sapiente
          soluta corrupti ea non debitis laudantium aliquam ipsum omnis,
          excepturi eveniet tempora quos voluptatum beatae nemo. Provident, id
          atque, ut quod fugiat amet iste suscipit autem ipsa eum ullam
          repellendus quam unde architecto nihil laudantium dolore aliquam
          dolorem eaque quaerat quibusdam totam aspernatur illum doloremque.
          Illum hic nulla iusto a minima expedita temporibus quasi veritatis
          mollitia tenetur incidunt voluptatum dignissimos quis nisi nam nobis
          omnis, ad modi ducimus consequuntur. Aliquid architecto sit autem
          doloribus aliquam porro nihil. Nulla quidem sunt, unde atque fugit
          odio at consequatur nihil aspernatur libero veniam ducimus
          reprehenderit voluptatem quo possimus dolores provident, saepe,
          incidunt rerum repellendus quis cum architecto recusandae explicabo!
          Accusamus, debitis ratione obcaecati molestiae iure amet? Nobis quo
          dolor cumque, fuga odit consectetur repellendus rerum, labore aliquam
          voluptatem iure fugit sit vero est, inventore suscipit! Enim tempora
          voluptate quae exercitationem vel dolores asperiores soluta, esse
          officiis ad ullam quidem nostrum inventore, nesciunt at nemo dicta.
          Facere illo, autem numquam quis iure voluptas minima deleniti cum
          doloremque eveniet officiis a mollitia magni sed aliquid voluptatibus
          ea quidem soluta! Nam earum suscipit incidunt eaque beatae numquam,
          consequatur eligendi dolore doloremque alias quas nulla corporis,
          debitis ullam! Asperiores cumque, consequatur fugit quam amet dicta?
          Cupiditate, maxime amet? Non, perferendis sunt rem ab quasi repellat
          iure porro eius magnam eveniet aperiam veritatis quos dicta, inventore
          incidunt sint impedit deserunt laborum sequi debitis possimus nulla
          aliquid? Necessitatibus facere animi ex nesciunt cupiditate nobis vel
          beatae adipisci ea voluptates, ipsam rerum eius nostrum iure dolorem
          distinctio fugiat aliquam, ut recusandae ab repudiandae pariatur
          ratione praesentium! Quam ipsam magni quo architecto molestias velit
          maiores illo odio suscipit inventore a, praesentium in repudiandae eum
          assumenda facere, consequuntur fugiat corrupti quae quasi
          exercitationem necessitatibus enim. Quos sed, nisi similique assumenda
          doloremque illo optio exercitationem obcaecati unde at animi beatae
          ipsa nemo nulla asperiores facere repellat? Repellendus, cupiditate
          neque! In explicabo rem voluptatibus ratione fugiat saepe facilis
          nihil ut aut enim veritatis exercitationem eveniet eos vel suscipit
          nisi impedit quia necessitatibus, nobis autem quam voluptatum dolorem!
          Quaerat itaque consequatur tempora nostrum omnis harum dolorem quam ex
          aperiam tenetur? Repellat, et commodi aspernatur non consequuntur ut
          necessitatibus consequatur hic esse accusantium tenetur provident
          nostrum corrupti? Accusantium libero id deserunt nesciunt quia enim
          ipsam atque temporibus veniam earum, tempore ullam, velit animi
          corrupti ratione harum? Reprehenderit architecto dolorum accusamus
          unde natus ipsa nisi? Nostrum impedit laboriosam repudiandae aliquid
          quae alias cumque iure aliquam, voluptatum eos iusto laborum ullam
          debitis sed consequuntur modi corrupti blanditiis maiores dolor
          beatae! Ab velit fugiat quam dicta autem veritatis eius, rem aliquid
          praesentium? Iste ipsum autem minima, totam illo soluta reiciendis
          aperiam repellat vel quibusdam quia voluptatibus deleniti quae sit quo
          inventore molestiae ducimus fugit repellendus, obcaecati cum. Aliquid
          a cum, necessitatibus dignissimos veniam blanditiis fugiat harum
          dolores natus maiores voluptate facilis eius sunt quaerat alias?
          Aliquid eaque in incidunt fuga perferendis pariatur dolorum,
          praesentium atque porro sequi! Ullam non placeat voluptatem cumque
          dignissimos voluptatibus vitae facere iste rerum assumenda impedit,
          voluptate temporibus beatae quae, ea quos quo illum nemo dicta,
          consequuntur fuga? Nobis accusantium, omnis nostrum aliquam libero
          laboriosam rerum amet adipisci consectetur facilis laborum praesentium
          voluptatibus ut harum magnam voluptate. Pariatur odio vitae dolore,
          quae eos eius quos eum ducimus dicta animi minima consectetur dolorum
          repudiandae, ut quisquam. Consequatur incidunt nulla iste unde
          facilis, officia dignissimos. Dolor qui maxime at nulla delectus
          doloremque voluptas sunt deserunt magni eius maiores fuga nemo, vitae
          quisquam repudiandae aspernatur recusandae distinctio, enim iusto
          tempora rem ad. Suscipit magnam officia, cumque, explicabo et repellat
          nobis ab corrupti libero ad ea distinctio perferendis non sed numquam
          officiis eaque facilis, eveniet neque veniam? Animi laborum
          accusantium, consectetur dolor voluptate saepe eos pariatur ex odit
          mollitia nisi nulla consequuntur cum ipsa error optio aspernatur quam
          reiciendis recusandae aliquid eaque omnis debitis eligendi
          necessitatibus. Nesciunt.
        </div>
        <Comments />
      </div>
    </div>
  );
};
