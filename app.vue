<template>
  <Html lang="en">
    <Head>
      <Meta charset="UTF-8"/>
      <Meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <Link rel="icon" href="/favicon.png"/>
      <Title>⎌ Porter Robinson ⎌</Title>

      <Meta property="og:title" content="⎌ Porter Robinson ⎌"/>
      <Meta name="twitter:title" content="⎌ Porter Robinson ⎌"/>
      <Meta name="application-name" content="⎌ Porter Robinson ⎌"/>
      <Meta name="apple-mobile-web-app-title" content="⎌ Porter Robinson ⎌"/>

      <Meta
        name="description"
        content="Everything we need is already here"
      />
      <Meta
        property="og:description"
        content="Everything we need is already here"
      />
      <Meta
        name="twitter:description"
        content="Everything we need is already here"
      />

      <Meta name="keywords" content="porter robinson,nurture,edm,music,porter,robinson"/>

      <!--We don't want to actually be indexed-->
      <Meta name="robots" content="noindex"/>

      <Meta property="og:type" content="website"/>
      <Meta name="twitter:card" content="summary_large_image"/>
      <Meta name="twitter:site" content="@zusor_io"/>
      <Meta name="twitter:creator" content="@zusor_io"/>


      <Meta name="theme-color" content="#000000"/>
    </Head>
  </Html>


  <NuxtPage/>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(2rem);
}
</style>

