<template>
  <section v-if="conference != null">
      <dl>
        <section v-for="track in conference.tracks" :key="track.id">
          <dt class="text-xl font-bold">
            {{ track.title }}
          </dt>
          <section v-for="section in track.sections" :key="section.id">
            <section v-for="speechy in section.speeches" :key="speechy.id">
              <dd class="ml-20 text-xl">
                <span>
                  {{ speechy.time | formatTime }}
                </span>
                <span class="font-semibold">
                  {{ speechy.title }}
                </span>
                <span v-if="speechy.duration != 0">
                  {{ speechy.duration | formatDuration}}
                </span>
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
    },
    filters: {
      formatTime(value) {
        const val = value / 60
        const hours = parseInt(val)
        const minutes = parseInt(60 * (val - hours))
        const minutesSufix = (minutes < 10) ? "0" : ""
        return `${hours}:${minutes + minutesSufix}`
      },
      formatDuration(value) {
        return value + " min"
      }
    }
  }
</script>

<style scoped>
</style>
