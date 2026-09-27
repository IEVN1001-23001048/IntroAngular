import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  templateUrl: './palindromo.html',
})
export class Palindromo {

  phrase = '';
  vowelsCount = 0;
  foundVowels: string[] = [];
  consonantsCount = 0;
  foundConsonants: string[] = [];
  isPalindrome = false;
  showResults = false;

  analyze() {
    this.vowelsCount = 0;
    this.foundVowels = [];
    this.consonantsCount = 0;
    this.foundConsonants = [];
    this.showResults = true;

    const V: any = {'A':'a','a':'a','E':'e','e':'e','I':'i','i':'i','O':'o','o':'o','U':'u','u':'u','Á':'a','á':'a','É':'e','é':'e','Í':'i','í':'i','Ó':'o','ó':'o','Ú':'u','ú':'u'};
    const C: any = {'B':'b','b':'b','C':'c','c':'c','D':'d','d':'d','F':'f','f':'f','G':'g','g':'g','H':'h','h':'h','J':'j','j':'j','K':'k','k':'k','L':'l','l':'l','M':'m','m':'m','N':'n','n':'n','Ñ':'ñ','ñ':'ñ','P':'p','p':'p','Q':'q','q':'q','R':'r','r':'r','S':'s','s':'s','T':'t','t':'t','V':'v','v':'v','W':'w','w':'w','X':'x','x':'x','Y':'y','y':'y','Z':'z','z':'z'};

    const clean: string[] = [];

    for (let i = 0; i < this.phrase.length; i++) {
      const char = this.phrase[i];
      if (V[char]) {
        this.foundVowels[this.vowelsCount++] = char;
        clean[clean.length] = V[char];
      } else if (C[char]) {
        this.foundConsonants[this.consonantsCount++] = char;
        clean[clean.length] = C[char];
      }
    }

    this.isPalindrome = clean.length > 0;
    for (let i = 0; i < clean.length / 2; i++) {
      if (clean[i] !== clean[clean.length - 1 - i]) {
        this.isPalindrome = false;
        break;
      }
    }
  }
}