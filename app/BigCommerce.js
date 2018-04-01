/*
~ = /home/user
.. = go up a level
. = stay at same level

~/a => /home/user/a
/a/../b => /b
/a/./b => /a/b
/a/~/b => /a/home/user/b
a/b => /a/b
'' (empty string) => /
/abc/../def => /def.
*/

function resolve(path) {
    let home = '/home/user';
    let temp= path.split('/');
    let output = '';

    function formatOutput(str) {
        return '/' + str;
    }

    function removePrevious(str) {
        let tempStr = str.split('/');
        tempStr.length = tempStr.length - 1;
        return tempStr.join('/');
    }

    for (let i = 0; i < temp.length; ++i) {
        switch(temp[i]){
            case '~': output += home;
                break;
            case '..':
                output = removePrevious(output);
                break;
            case '.':
                output = output;
                break;
            default:
               temp[i].length>0? output += formatOutput(temp[i]):'';
        }   
    }
  
    return output;
}

 console.log(resolve('~/a/b/c')      === '/home/user/a/b/c'         ? 'success' : resolve('~/a/b/c'));
 console.log(resolve('~/a/./b')      === '/home/user/a/b'           ? 'success' : resolve('~/a/./b'));
 console.log(resolve('~/abc/../def') === '/home/user/def'           ? 'success' : resolve('~/abc/../def'));
 console.log(resolve('/a/~/b')       === '/a/home/user/b'           ? 'success' : resolve('/a/~/b'));
 console.log(resolve('/a/b')         === '/a/b'                     ? 'success' : resolve('/a/b'));
 console.log(resolve('/a/b/../../c') === '/c'                       ? 'success' : resolve('/a/b/../../c'));
 console.log(resolve('/a/~/~/b')     === '/a/home/user/home/user/b' ? 'success' : resolve('/a/~/~/b'));

// bonus
 console.log(resolve('~/..') === '/home' ? 'success' : resolve('~/..'));

 console.log(resolve('𨋳'));