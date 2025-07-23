const solution=(s)=>s.split(' ').map(s=>[...s].map((c,i)=>i%2==0?c.toUpperCase():c.toLowerCase()).join('')).join(' ');
