import { Coffee } from "../../components/coffee/coffee"
import { Coffees } from "../../helps/coffees-list"
import { HomeContainer } from "./home.styles"
import { Coffee as CoffeeFill, Package, ShoppingCart, Timer } from "phosphor-react"
import FeaturedImage from "../../assets/featuredImage.png"

export function Home() {
    const coffees = Coffees
    return (
        <HomeContainer>
            <div className="background"></div>
            <section>
                <div>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    <div className="">
                        <div>
                            <span className="shoppingCart"><ShoppingCart weight="fill" size={16} /></span>
                            <p>Compra simples e segura</p>
                        </div>
                        <div>
                            <span className="package"><Package weight="fill" size={16} /></span>
                            <p>Embalagem mantém o café intacto</p>
                        </div>
                        <div>
                            <span className="timer"><Timer weight="fill" size={16} /></span>
                            <p>Entrega rápida e rastreada</p>
                        </div>
                        <div>
                            <span className="coffee"><CoffeeFill weight="fill" size={16} /></span>
                            <p>O café chega fresquinho até você</p>
                        </div>
                    </div>
                </div>
                <img src={FeaturedImage} />
            </section>
            <main>
                <h2>Nossos cafés</h2>
                <div className="coffeeList">
                    {coffees.map((coffee) => (
                        <Coffee
                            key={coffee.id}
                            coffee={coffee}
                        />
                    ))}
                </div>
            </main>
        </HomeContainer>
    )
}
