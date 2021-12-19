<template>
  <section v-if="conference != null">
      <dl>
        <section v-for="track in conference.tracks" :key="track.id">
          <dt class="text-xl font-bold">
            {{ track.title }}
          </dt>
          <section v-for="section in track.sections" :key="section.id">
            <section v-for="speechy in section.speeches" :key="speechy.id">
              <dd>
                {{ speechy.title }}
              </dd>
            </section>
          </section>
        </section>
      </dl>
  </section>
</template>

<script>
  export default{
    name: "Conference",
    props: {
      conference: String,
    }
  }
</script>

<style scoped>

  dl {
    text-align: justify;
  }
</style>
