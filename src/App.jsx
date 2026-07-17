
import './App.css'

function App() {
const name = "Арсеній"
const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaEl_eAG-mkJNnJKpLsfRGH_EgIjDr66PhWVbQeW-VGWC0GQhOsBQofhQ&s=10"
const description = "цукерка";
const news = {
  name: "news",
  url:"https://kyivindependent.com/",
}
  const number1 = 112
  const number2 = 159
  const sum = number1 + number2
  const colors = ["Червоний", "Синій", "Зелений"]
  return (
    <div>
      <h1>{name}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src="image" alt="description" />
      <a href={news.url}>{news.name}</a>
      <p>Сума: {sum}</p>
      <ul>
  {colors.map((color, index) => (
    <li key={index}>{color}</li>
  ))}
</ul>
    </div>
  )
}

export default App
