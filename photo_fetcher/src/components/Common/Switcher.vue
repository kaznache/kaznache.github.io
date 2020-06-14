<template>
  <div class="switcher">
    <input type="checkbox" class="switcher_input" id="switcherInput" @change="$emit('input', $event.target.checked)">
    <label class="switcher_label" for="switcherInput">
      <slot></slot>
    </label>
  </div>
</template>

<style lang="sass" scoped>
.switcher
  padding-left: 60px
  position: relative

.switcher_input
  opacity: 0
  width: 0
  height: 0
  &:checked ~ .switcher_label
    &:before
      background-color: #6a4bd5
    &:after
      transform: translateX(24px)

.switcher_label
  display: inline-block
  font-size: 18px
  cursor: pointer
  margin-bottom: 0
  &:before
    content: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNy4zNzU1OSAyNy40NTQxNiIgd2lkdGg9IjEwcHgiIGhlaWdodD0iMTBweCIgZmlsbD0iI2IzYjNiMyI+PGc+PHBhdGggZD0iTTAgMjYuMTFMMjYuMDMzLjFsMS4zNDMgMS4zNDQtMjYuMDMzIDI2LjAxeiIvPjxwYXRoIGQ9Ik0wIDEuMzQzTDEuMzQzIDBsMjYuMDIyIDI2LjAyLTEuMzQ0IDEuMzQ1eiIvPjwvZz48L3N2Zz4=")
    font-size: 13px
    color: #fff
    padding: 3px 0 0 31px
    width: 48px
    height: 24px
    position: absolute
    top: 0
    left: 0
    background-color: #595959
    border-radius: 13px
    transition: all .4s ease-in
  &:after
    content: ""
    color: #fff
    width: 18px
    height: 18px
    background-color: #fff
    position: absolute
    top: 3px
    left: 3px
    border-radius: 50%
    transition: all .4s ease
</style>
