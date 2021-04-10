<!-- eslint-disable max-len -->
<template>
  <div class="task">
    <div class="main">
      <div class="header">
        <div class="id">Task no: {{ taskNumber }}</div>
        <div class="menu">
          <span class="material-icons"> more_vert </span>
        </div>
      </div>
      <div class="title">
        {{ title }}
      </div>
      <div class="content">
        {{ description }}
      </div>
      <div class="footer">
        <div class="deadline">
          <div class="text">Deadline</div>
          <div class="date danger">{{deadline}}</div>
        </div>
        <div class="view">
          <span class="material-icons"> preview </span>
        </div>
      </div>
    </div>
    <div class="status">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FF2300"
          fill-opacity="1"
          d="M0,32L34.3,32C68.6,32,137,32,206,74.7C274.3,117,343,203,411,224C480,245,549,203,617,165.3C685.7,128,754,96,823,112C891.4,128,960,192,1029,181.3C1097.1,171,1166,85,1234,53.3C1302.9,21,1371,43,1406,53.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <div class="progress danger eighty"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskCard',
  props: {
    taskNumber: Number,
    title: String,
    description: String,
    deadline: String,
    startDate: String,
  },
};
</script>

<style lang="scss">
@import '../styles/task.card.styles.scss';
</style>
