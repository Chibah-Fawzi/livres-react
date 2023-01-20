// On importe le composant livre du chemin "./components/Livres"
import Livres from "./components/Livres"
import './App.css'

// On export la function App par défault
export default function App() {

  // Créer une liste de livres
  var books = [
    { title: "L'étranger", author: 'Camus', price: '100', image: 'https://m.media-amazon.com/images/I/8130inT26AL.jpg' },
    { title: "1984", author: 'Orwell', price: '80', image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1504611957l/9577857._SX318_.jpg' },
    { title: "Cousine K", author: 'Yasmian Khedra', price: '1000', image: 'https://m.media-amazon.com/images/I/71b7rrzSHkL.jpg' },
  ]


  const addBook = (event) => {
    event.preventDefault()
    //First option
    // console.log("first way", document.getElementById('title').value);

    //Second option
    console.log("second way", event.target.bookTitle.value);


    // On récupére les valeurs des inputs à l'aide de even.target.namedel'élément.value
    var bookTitle = event.target.bookTitle.value
    var bookAuthor = event.target.bookAuthor.value
    var bookPrice = event.target.bookPrice.value


    // On crée un objet qui contiens les inputs du user avec le même schéma que celui de la liste de livres principale
    var newBook = {
      title: bookTitle,
      author: bookAuthor,
      price: bookPrice,
      image: 'https://thumbs.dreamstime.com/z/green-silhouette-open-book-question-mark-flying-out-isolated-white-background-flat-reading-icon-unknown-pictogram-ask-107585582.jpg'
    }

    // On log si l'objet marche bien
    console.log(newBook);

    // On push le nouveau livre vers la listes des livres
    books.push(newBook)
  }

  // Retourner du HTML
  return (
    <div className="App">

      {/* On lie la function avec l'évenement onSubmit */}
      <form onSubmit={addBook}>
        <div>
          <label>Title</label>
          {/* On ajoute à chaque input un attribut name pour pouvoir le selectionner dans la function et récupérer sa valeur */}
          <input name="bookTitle" id="title" type="text" placeholder="Book Title" />
        </div>

        <div>
          <label>Author</label>
          <input name="bookAuthor" type="text" placeholder="Book Author" />
        </div>

        <div>
          <label>Price</label>
          <input name="bookPrice" type="text" placeholder="Book Price" />
        </div>

        {/* On ajoute au button un type="submit" afin qu'il agisse comme émetteur des données écrites dans les input, pour déclancher le submit qui lui éxecute la function addBook */}
        <button type="submit">Ajouter un livre</button>
      </form>


      {/* On a créé une balise qui affiche le composant Livres  */}
      {/* On passe un props (la liste des livres) vers l'enfant Livres  */}
      <Livres books={books} />
    </div>
  )
}
