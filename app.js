var $=function(i){return document.getElementById(i)};
if($('s1')){function calc(){var a=+$('s1').value,d=+$('s2').value,t=a*d;$('v1').textContent=a;$('v2').textContent=d;$('tot').textContent='₹'+t.toLocaleString('en-IN');$('yr').textContent='₹'+(t*12).toLocaleString('en-IN')+' in a year'}
$('s1').oninput=$('s2').oninput=calc;calc();$('f').onsubmit=function(e){e.preventDefault();$('ok').textContent='Thanks! You are on the list.';e.target.reset()}}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1});
document.querySelectorAll('.rv').forEach(function(x){io.observe(x)});
