
<template>
  <div>
    <Header></Header>
    <Container></Container>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import Container from "./Container";
import Footer from "../../components/layout/Footer.vue";

export default {
  components: {
    Header,
    Container,
    Footer
  }
};
</script>

