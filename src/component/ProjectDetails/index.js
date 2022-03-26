
import { Typography, Grid, GridList  } from "@material-ui/core"
import useStyle from "./style"
import fullStackDeveloper from "../../Asset/full-stack-developer.png"


const ProjectDetails=()=>{
    const classes=useStyle()
    return(
        <>
            <div className={classes.toolbar} />
            <Typography variant="h2" align="center" gutterBottom>Project Details</Typography>
            <Grid container rowSpacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={6}>
                    <img src={fullStackDeveloper} alt="full stack developer" />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5" align="center" gutterBottom>Building E-commerce website using Django framework</Typography>
                    <Typography variant="subtitle2" gutterBottom>This project consists of preparing an E-commerce website, which provides the user with an overview of the products available for purchase in the store (1 website).</Typography>
                    <Typography variant="subtitle2" gutterBottom>An online shopping cart (module 1) is provided to the user to make online shopping more convenient.</Typography>
                    <Typography variant="subtitle2" gutterBottom>The project is operated using Python's web framework Django (4.0). To design an e-commerce website, to displays products (Module 2), customers select catalogs and select products, then remove products from cart.</Typography>
                    <Typography variant="subtitle2" gutterBottom>The selected items add in a goods module (module 1). At checkout, the items on the card shall be present as an order. Customers pay for card items to complete an order.</Typography>
                    <Typography variant="subtitle2" gutterBottom>The software can only be accessed by those with the appropriate access authority (Django 4.0).</Typography>
                    <Typography variant="subtitle2" gutterBottom>1) The customer shops for a product, 2) The customer changes quantity, 3) The customer adds an item to the cart, 4) The customer views the cart, 5) The customer checks out, 6) The customer places the order.</Typography>
                    <Typography variant="subtitle2" gutterBottom>The Admin Interface: 1) Admin login, 2) Admin insert items, 3) Admin delete items, 4) Admin modifies items.</Typography>
                </Grid>
                <Grid item xs={6}>
                    <img src={fullStackDeveloper} alt="full stack developer" />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5" align="center" gutterBottom>Building Discussion forum website using Django (4.0).</Typography>
                    <Typography variant="subtitle2" gutterBottom>This question form contains the following information: 1) question title 2) user who asked the question 3) the date the question was a post on the forum 4) upvotes and downvotes.</Typography>
                    <Typography variant="subtitle2" gutterBottom>The logged-in users (module2) may post their questions or problems or answer other users' questions if the user knows the answers.</Typography>
                    <Typography variant="subtitle2" gutterBottom>User form: 1) username 2) password 3) name 4) last name 5) email  Reply form: 1) question for answer 2) question answer 3) author 4) time 5) likes and dislikes.</Typography>
                    <Typography variant="subtitle2" gutterBottom>Blog post-module: 1) blog title 2) post descriptions 3) date 4) admin and latest blog title.</Typography>
                </Grid>
                <Grid item xs={6}>
                    <img src={fullStackDeveloper} alt="full stack developer" />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5" align="center" gutterBottom>Building E-commerce website using React.js. </Typography>
                    <Typography variant="subtitle2" gutterBottom>React is a great JavaScript framework to build an e-commerce web app. It has a big & active community, is component-based, supports server-side rendering, uses virtual DOM.</Typography>
                    <Typography variant="subtitle2" gutterBottom>These features make React.js the perfect choice for a fast, scalable, and user-friendly e-commerce website (1 App).</Typography>
                    <Typography variant="subtitle2" gutterBottom>Navigation bar: 1) Website logo (link provides to logo for home options 2) E-Commerce store name (link is also applied) 3) include an icon in cart. </Typography>
                    <Typography variant="subtitle2" gutterBottom>Add to cart: 1) put product options on map 2) update 3) empty cart 4) remove items from the cart.</Typography>
                    <Typography variant="subtitle2" gutterBottom>Checkout form: 1) address form in this customer information 2) card functionality payment form to purchase property 3) confirmation form.</Typography>
                    <Typography variant="subtitle2" gutterBottom>Address form: 1) name 2) surname 3) city 4) e-mail 5) postal code / postal code 6) country 7) subdivision Payment Details: 1) Product Review 2) Payment Authentication Confirmation Details.</Typography>
                </Grid>
            </Grid>
        </>
    )
}
export default ProjectDetails;