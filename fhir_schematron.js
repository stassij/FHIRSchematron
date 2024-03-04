class HumanName {
  use;
  text;
  family;
  given = [];
  prefix = [];
  suffix = [];
  period;
}

const NameUse = {
  usual: 'Usual',
  official: 'Official',
  temp: 'Temp',
  nickname: 'Nickname',
  anonymous: 'Anonymous',
  old: 'Old',
  maiden:	'Name changed for Marriage'
}

class Period {
  start;
  end;
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  constructor(start) {
    this.start = start;
  }
  // Getter
  get start() {
    return this.start
  }
  get end() {
    return this.end
  }
  get duration() {
    return this.calcDuration();
  }
  // Method
  calcDuration() {
    if this.end !== undefined {
      return this.end - this.start;
    } else {
      return Date.now - this.start;
    }
  }
}
