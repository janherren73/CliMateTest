<template>
  <body>
    <div class="container">
      <h1>Count Down</h1>
      <Countdown 
      :year= "2020"
      :month= "10"
      :date= "2"
      :hour= "15"
      :minute= "16"
      :second= "59"
      :millisecond= "11"
      />
    </div>
  </body>
</template>
<script src="./Home.js"></script>
<style src="./Home.scss" lang="scss" scoped></style>
