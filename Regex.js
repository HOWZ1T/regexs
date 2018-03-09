//REGEX FOR MATCHING EMAILS BASED ON THE EMAIL STRUCTURE DETAILED AT: https://en.wikipedia.org/wiki/Email_address
let emailRegex = /^[^.][a-zA-Z0-9!#$%&'*+-/=?^_`{|}~.]{1,64}@{1}[a-zA-Z0-9-.]{1,255}.[a-zA-Z0-9-.]{1,63}\.[a-zA-Z0-9]{1,63}$/;
let emailRegexVariant /^[^.][a-zA-Z0-9!#$%&'*+-\/=?^_`{|}~.]{1,64}@[a-zA-Z0-9-.]{1,255}\.[a-zA-Z0-9-.]{1,63}[^. ]$/; //slightly improved email matching regex
let nameRegex = /^[a-zA-Z .,'-]+$/;
let addressRegex = /^[a-zA-Z0-9 .,'-/\n]+$/;
let phoneRegex = /^(\+614|[(]04[)]|04)[ ][0-9]{3,3}[ ][0-9]{3,3}[ ][0-9]{2,2}$/; //FOR AUSTRALIAN PHONE NO.S
let creditCardRegex = /^[^ ][ 0-9]{12,19}$/;
let visaRegex = /^4[ 0-9]{13,18}$/;
let masterCardRegex = /^5[0-5]([ 0-9]){12,21}$/;
let ipv4regex = /^(((((0|1){1}[0-9]{0,2}\.{1})|(2(([0-4]{0,1}[0-9]{0,1})|([0-5]{0,1}[0-5]{0,1})){1}\.{1})|([0-9]{2}\.{1})){3}(((0|1){1}[0-9]{0,2})|(2[0-5]{0,2})|([0-9]{2})){1})|(249\.249\.249\.249))$/;
