class WhereClause {
  constructor(base, bigQ) {
    this.base = base;
    this.bigQ = bigQ;
  }

  search() {
    const searchWord = this.bigQ.search
      ? {
          userName: {
            $regex: this.bigQ.search,
            $options: "i",
          },
        }
      : {};

    this.base = this.base.find({ ...searchWord });

    return this;
  }

  filter() {
    let copyQ = { ...this.bigQ };

    delete copyQ["search"];
    delete copyQ["limit"];
    delete copyQ["page"];

    let stringOfCopyQ = JSON.stringify(copyQ);

    stringOfCopyQ = stringOfCopyQ.replace(
      /\b(gte|lte|gt|lt)\b/g,
      (m) => `$${m}`
    );

    const jsonOfCopyQ = JSON.parse(stringOfCopyQ);

    this.base = this.base.find(jsonOfCopyQ);

    return this;
  }

  pager() {
    let currentPage = 1;
    let limit = 50;
    if (this.bigQ.page) currentPage = this.bigQ.page;

    if (this.bigQ.limit) limit = JSON.parse(this.bigQ.limit);

    this.base = this.base.limit(limit).skip(limit * (currentPage - 1));

    return this;
  }
}

module.exports = WhereClause;
