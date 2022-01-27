<template>
  <div class="px-12">
    <div class="header_search_container flex justify-between space-x-6 mt-5">
      <input
        type="text"
        class="input_length w-96 rounded-md border-1 text-gray-300 border-gray-300 py-3 pl-5"
        placeholder="Search for Products"
      />
      <div
        class="header_search_icon_container flex items-center justify-center p-2 rounded-md bg-primary text-sm text-white cursor-pointer hover:bg-blue-600 transition ease-out duration-1000 hover:font-bold hover:font-new"
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
    flex-grow: 1;
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
