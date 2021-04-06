<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/edu">Experience</router-link>
    <router-link to="/Projects">Projects</router-link>
    <router-link to="/etc">Etc</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-color: rgb(163, 163, 163);
  padding: 30px 0px;
}

#nav a {
  font-weight: bold;
  color: #4c6986;
  padding: 0px 10px;
}

#nav a.router-link-exact-active {
  color: #303033;
}

.title {
  padding: 10px;
  font-size: 30px;
}

.lvl1-wrapper {
  padding: 22px 0px;
}

.subtitle {
  font-size: 20px;
  padding-bottom: 7px;
}

.table-wrapper {
  margin-left: auto;
  margin-right: auto;
}

.content-text {
  font-size: 15px;
  text-align: left;
  padding: 3px;
}

.detail-text {
  font-size: 12px;
  font-style: italic;
}
</style>
