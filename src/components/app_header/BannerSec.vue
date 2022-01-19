<template>
  <div>
    <div class="header_search_container flex mr-12 space-x-1 mt-5">
      <input
        type="text"
        class="input_length w-96 mr-5 rounded-md border-1 text-gray-300 border-gray-300 py-3 pl-5"
        placeholder="Search for Products"
      />
      <div
        class="header_search_icon_container flex items-center p-2 rounded-md pl-11 bg-primary text-sm text-white"
      >
        Search
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header_search_container {
  flex-grow: 1;
  input {
    // background-color: #fff;
    // border: 2px solid rgb(54, 50, 50);
    background-color: white;
    width: 1150px;
  }
  input::placeholder {
    // color: #000;
    font-weight: 200;
    font-size: 0.875rem;
  }
  input:focus {
    border-color: #1591aa;
  }
  .header_search_icon_container {
    // background-color: rgba(52, 183, 210, 0.58);
    width: 145px;
  }
}
</style>
