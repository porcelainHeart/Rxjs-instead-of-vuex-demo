import Rx from 'Rxjs'
export default new class Store {
  // state
  text = ''
  textChange = new Rx.Subject()
  constructor () {
    this.mutateText('')
  }

  // actions
  inputText (value) {
    // commit
    console.log(value)
    console.log(this)
    this.mutateText(value)
  }

  // mutation
  mutateText (value) {
    this.text = value
    this.textChange.next(this.text)
  }

  get onChangedText () {
    return this.textChange.asObservable()
  }
}()
