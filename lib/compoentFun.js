const componentFun = function (functionObject) {
    return function (it) {
        return functionObject.toString().match(/\/\*([\s\S]*?)\*\//)[1].replace(/\{{\w.+\}}/g, function (v) {
            v = v.replace('{{', '').replace('}}', '');
              if (v.indexOf('.') > 0) {
                let array = v.split('.');
                return it[array[0]][array[1]];
                // switch (array.length) {
                //     case  2: return it[array[0]][array[1]]; break;
                //     case  3: return it[array[0]][array[1]][array[2]]; break;
                //     case  4: return it[array[0]][array[1]][array[2]][array[3]]; break;
                // }
            } else {
                return it[v];
            }

        });
    }
};