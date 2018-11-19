class Cell {
  constructor() {
    this.isMine     = false,
    this.isOpen     = false,
    this.isLock     = false
    this.mineAround = 0
  }
}

new Vue({
  el: '#wrap',
  data: {
    width: 6,
    height: 6,
    mineCount: 6,
    cells: [],

    lockCount: 0,
    openCount: 0,

    stage: ''
  },

  methods: {
    rand (min, max) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    },

    // main function for generate fields |> set mines |> contMineAroud
    fill () {
      this.cells = [];
      this.openCount = 0;
      this.lockCount = 0;
      this.stage = '';

      // if inputs vals !good then set normal
      if( this.width < 6 || !parseInt(this.width) ) this.width = 6;
      if( this.height < 6 || !parseInt(this.height) ) this.height = 6;
      if( this.width > 30 ) this.width = 30;
      if( this.height > 30 ) this.height = 30;

      if( this.mineCount >= (this.width * this.height) )
        this.mineCount = parseInt(this.width * this.height) - 2;
      if( this.mineCount < 6 || !parseInt(this.mineCount) )
        this.mineCount = 6;

      // generate fields grid
      for (let i = 0; i < this.width; i++) {
        let temp = [];
        for (let j = 0; j < this.height; j++) {
          temp.push(new Cell())
        }
        this.cells.push(temp);
      }

      // sets mines
      for(let i = 0; i < this.mineCount;) {
        let x = this.rand(0, this.width - 1);
        let y = this.rand(0, this.height - 1);

        if( !(this.cells[x][y].isMine) ) {
          this.$set(this.cells[x][y], 'isMine', true);
          i++;
        }
      }

      this.mineAround();
    },

    mineAroundCounter (x, y) {
      var
        // dont go border
        xStart = x > 0 ? x - 1 : x,
        yStart = y > 0 ? y - 1 : y,
        xEnd   = x < this.width  - 1 ? x + 1 : x,
        yEnd   = y < this.height - 1 ? y + 1 : y,
        count = 0;

      for(let i = xStart; i <= xEnd; i++)
        for(let j = yStart; j <= yEnd; j++)
          if(this.cells[i][j].isMine && !(x==i && y==j))
            count++

      this.$set(this.cells[x][y], 'mineAround', count);
    },

    mineAround () {
      for (let i = 0; i < this.width; i++) {
        for (let j = 0; j < this.height; j++) {
          this.mineAroundCounter(i, j);
        }
      }
    },

    open (x, y) {
      if( (this.cells[x][y].isLock || this.cells[x][y].isOpen || this.stage) ) return;

      if( this.cells[x][y].isMine ) {
        // dont lose on start (first click)
        if(this.openCount == 0)
          this.fill(),
          this.open(x,y);
        else
          this.stage = 'lose';
      } else {
        this.$set(this.cells[x][y], 'isOpen', true);
        this.openCount++;

        if(this.cells[x][y].mineAround == 0) {
          // so hard because recursion
          for(let i = x>0?x-1:x; i <= x + 1 && i<this.width; i++)
            for(let j = y>0?y-1:y; j <=  y + 1 && j<this.height; j++)
              this.open(i, j);
        }

        if( this.openCount + parseInt(this.mineCount) == parseInt(this.width * this.height))
          this.stage = 'win';
      }
    },

    lock (x, y) {
      if( !(this.cells[x][y].isOpen || this.stage) )
        this.lockCount++, this.$set(this.cells[x][y], 'isLock', !this.cells[x][y].isLock);
    }

  },

  created () {
    this.fill();
  }
})