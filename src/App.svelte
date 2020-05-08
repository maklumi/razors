<script>
  // pages
  import About from "./laman/About.svelte";
  import Cekout from "./laman/Cekout.svelte";
  import Home from "./laman/Home.svelte";
  import Login from "./laman/Login.svelte";
  import Products from "./laman/Products.svelte";
  import ProductTemplate from "./laman/ProductTemplate.svelte";
  // routes
  import { Router, Route, Link } from "svelte-routing";
  // beberap komponen
  import Navbar from "./komponen/Navbar/MainNavbar.svelte";
  import SideBar from "./komponen/Navbar/SideBar.svelte";
  import globalNav from "./stor/globalNav";
</script>

<Router>
  <Navbar />
  {#if $globalNav.sidebar}
    <SideBar />
  {/if}
  <Route path="/" component={Home} />
  <Route path="about" component={About} />
  <Route path="produk" component={Products} />
  <Route path="produk/:id" component={ProductTemplate} />
  <Route path="login" component={Login} />
</Router>
