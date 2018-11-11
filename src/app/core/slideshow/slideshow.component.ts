import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit, OnDestroy {
  fixedWidth;
  _images = [{name: 'אורה סלו***', date: '11/10/2017', comment:'זה פשוט מהפכני. תודה רבה על השירות המסור מומלץ בחום.'},
  {name: 'אשר ל**', date: '11/10/2018', comment:'הלכתי לרופא עם תלונה על כאבי רגליים והוא המליץ לי על הפתרון הזה וזה פשוט עוזר. מומלץ ללא ספק.'},
  {name:'רונית ל**', date: '22/04/2017', comment:'לא הצלחתי לעמוד זמן ממושך על הרגליים. תיאמתי פגישה וזה פשוט סידר לי את החיים מקצה לקצה.'},
  {name: 'יוסי בן ד**', date: '28/08/2018', comment:'לא הצלחתי לשבת על כסא במשרד, הייתי מוצא את עצמי בכל מיני תנוחות הזויות כדי לא להרגיש את הכאב. קבעתי פגישה, התאימו לי את הרפידה וזהו מאז אני פשוט אדם רגיל.'},
  {name: 'אריה שטיי***', date: '15/06/2018', comment:'יחס אישי, התאמה אישית של הרפידה לכף הרגל, פשוט תענוג! לא ידעתי שיש דברים כאלה במציאות חשבתי זה רק בחלום. תודה רבה! מומלץ עם המון חום ואהבה.'},
  {name: 'כוכבה אבן ***', date: '12/12/2017', comment:'אין לי מילים. אני חשבתי שאיבדתי את יכולת העמידה על הרגליים הרפידות האלה פשוט בלתי יאומנות. תודה רבה רבה רבה.'},
  {name: 'אברהם אלי***', date: '21/12/2017', comment:'היה לי קושי בהליכה ושלא נדבר על ריצה זה לא עלה בדימיוני בכלל. פגישה אחת, התאמה אחת של הרפידה והופה אני פשוט רץ כאילו אני בנעורים.'},];
  ind = 0;
  _repeat = true;
  interval;
_intervalTime = 3500;

  @Input() set _slidingTime(time){
    this._intervalTime = time;
  }
  @Input() set repeat(rpt){
    this._repeat = rpt;
  }
@Input() set images(images){
  this._images = images;
}

  constructor() {
    this.fixedWidth = window.innerWidth;
    if(this._repeat)
    this.interval = setInterval(() => { this.ind += 1; console.log(this.ind); }, this._intervalTime);
  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    if(this._repeat)
    clearInterval(this.interval);
  }
}
