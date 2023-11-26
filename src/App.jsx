import Card from "./components/Card";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="app flex justify-center items-center p-5 bg-[url(./bg-light.png)] dark:bg-[url(./bg-dark.png)] bg-cover bg-no-repeat dark:bg-[#0f172a]">
      <Navbar />
      <div className=" gallery max-w-7xl columns-1 sm:columns-2 md:columns-4 lg:columns-5 gap-5 mt-14">
        <Card imageSource={"./images/1.jpg"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vitae
          iste repudiandae asperiores dicta iusto consequuntur animi,
        </Card>
        <Card imageSource={"./images/2.jpg"}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
          perferendis?
        </Card>
        <Card imageSource={"./images/3.jpg"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dicta,
          dignissimos laudantium nesciunt amet nisi?
        </Card>
        <Card imageSource={"./images/4.jpg"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          vitae tempora eligendi voluptatem, assumenda reiciendis nobis quae
          facere delectus in?
        </Card>
        <Card imageSource={"./images/5.jpg"}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
          reprehenderit!
        </Card>
        <Card imageSource={"./images/6.jpg"}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          reiciendis qui illum unde sit perspiciatis.
        </Card>
        <Card imageSource={"./images/7.jpg"}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          temporibus, minima ut accusantium qui ex necessitatibus. Nostrum
          provident aliquam voluptatem.
        </Card>
        <Card imageSource={"./images/8.jpg"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          harum corporis similique illum nesciunt aperiam.
        </Card>
        <Card imageSource={"./images/9.jpg"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          aliquam.
        </Card>
        <Card imageSource={"./images/10.jpg"}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
          ipsa aperiam veritatis alias magnam itaque, nam dolor, suscipit illum
          aspernatur quidem, neque dolorem est modi.
        </Card>
        <Card imageSource={"./images/11.jpg"}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          quisquam atque recusandae in!
        </Card>
        <Card imageSource={"./images/12.jpg"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          dicta voluptatibus nihil eos ratione quis mollitia! Sit.
        </Card>
        <Card imageSource={"./images/13.jpg"}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          ipsum, maiores eos consectetur ab debitis ratione quaerat facere.
        </Card>
        <Card imageSource={"./images/14.jpg"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          distinctio maxime ea, reiciendis, deserunt fuga, expedita voluptas
          atque iure ipsum ut vitae!
        </Card>
        <Card imageSource={"./images/15.jpg"}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat aut
          atque reprehenderit obcaecati officiis!
        </Card>
        <Card imageSource={"./images/16.jpg"}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          corrupti doloribus voluptatum eligendi obcaecati odio numquam.
          Similique porro voluptatem veniam.
        </Card>
        <Card imageSource={"./images/17.jpg"}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          placeat at vero, ipsum laudantium excepturi dolores similique tempora.
        </Card>
        <Card imageSource={"./images/18.jpg"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
          delectus.
        </Card>
        <Card imageSource={"./images/19.jpg"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          delectus et totam. Maiores, veritatis voluptatum?
        </Card>
        <Card imageSource={"./images/20.jpg"}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          dicta voluptatum tenetur officia dolore voluptates illum.
        </Card>
        <Card imageSource={"./images/21.jpg"}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
          architecto fugit dolores odit recusandae nisi, ipsam maiores atque.
        </Card>
        <Card imageSource={"./images/22.jpg"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          assumenda odio fugiat quos!
        </Card>
        <Card imageSource={"./images/23.jpg"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic accusamus
          vel rem. Cupiditate.
        </Card>
        <Card imageSource={"./images/24.jpg"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          aliquam, suscipit excepturi saepe porro officia magni fuga!
        </Card>
        <Card imageSource={"./images/25.jpg"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          aspernatur beatae cum laborum ut molestias labore. Dolorem neque
          similique porro?
        </Card>
      </div>
    </div>
  );
}
