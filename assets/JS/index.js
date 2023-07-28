{
    let a = 5;
    let b = 7;
    (a = (a + b) - a) && (b = (5 + b) -b)
    console.log(a,b);
}
//? Kvadratin perimetri ve sahesi
{
    let a = 5;
    // ! Kvadratin Perimetri tapmaq ucun dustur (P=4*a)
    let p = 4 * 5;
    console.log("Kvadratin perimetri=" +p);
    //! Kvadratin Sahesin tapmaq ucun dustur (S=a*a)
    let s = 5 * 5;
    console.log("Kvadratin sahesi=" +s);
}
//? Duzbucaqlinin perimetri ve sahesi
{
    let width = 5;
    let lenght = 7;
    // ! Duzbucaqlinin Perimetri tapmaq ucun dustur (P=(width + lenght) * 2)
    let p = (width + lenght) * 2;
    console.log("Duzbucaqlinin perimetri=" +p);
    //! Duzbucaqlinin Sahesin tapmaq ucun dustur (S = width * lenght)
    let s = width * lenght;
    console.log("Duzbucaqlinin sahesi=" +s);
}
//? Log in
{
    let userName = "Farid";
    let password = 112233;
    userName == "Farid" && password == 112233 ? console.log("is login true") : console.log("is login false");
}


