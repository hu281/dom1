<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <script type="text/javascript">
      class EventEmitter {
        constructor() {
          this.emap = {}
        }
        on(ename, efn) {
          let efns = this.emap[ename]
          if (efns === undefined) {
            efns = []
            this.emap[ename] = efns
          }
          efns.push(efn)
        }
        emit(ename, ...args) {
          const efns = this.emap[ename]
          if (efns === undefined) {
            return
          }
          for (const fn of efns) {
            fn(...args)
          }
        }
        off(ename, efn) {
          const efns = this.emap[ename]
          for (let i = 0; i < efns.length; i++) {
            if (efns[i] === efn) {
              efns.splice(i, 1)
              break
            }
          }
          if (efns.length === 0) {
            delete this.emap[ename]
          }
        }
      }
    </script>
  </body>
</html>