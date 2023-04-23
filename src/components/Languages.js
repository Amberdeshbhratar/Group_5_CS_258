export const languages = [
        {
                id: 53,
                name: "C++ (GCC 8.3.0)",
                label: "C++ (GCC 8.3.0)",
                value: "cpp",
                defaultcode: `
#include <iostream>
using namespace std;    
    
int main() {
    // your code goes here
    cout<<"hi";
    return 0;
}

                `
                ,
                extension:".cpp"
        },
        {
                id: 63,
                name: "JavaScript (Node.js 12.14.0)",
                label: "JavaScript (Node.js 12.14.0)",
                value: "javascript",
                defaultcode:`
console.log('Hello World');
                `
                ,
                extension:".js"
        },
      
        {
                id: 46,
                name: "Bash (5.0.0)",
                label: "Bash (5.0.0)",
                value: "bash"
                ,
                extension:".sh"
        },
        {
                id: 75,
                name: "C (Clang 7.0.1)",
                label: "C (Clang 7.0.1)",
                value: "c",
                defaultcode:`
#include <stdio.h>
int main() {
        // printf() displays the string inside quotation
        printf("Hello, World!");
        return 0;
}
                `
                ,
                extension:".sh"
        },
        {
                id: 76,
                name: "C++ (Clang 7.0.1)",
                label: "C++ (Clang 7.0.1)",
                value: "cpp",
                extension:".cpp"
        },      
        {
                id: 51,
                name: "C# (Mono 6.6.0.161)",
                label: "C# (Mono 6.6.0.161)",
                value: "csharp",
                extension:".NET"
        },
       
        {
                id: 87,
                name: "F# (.NET Core SDK 3.1.202)",
                label: "F# (.NET Core SDK 3.1.202)",
                value: "fsharp",
                extension:".fs"
        },
       
       
       
        {
                id: 62,
                name: "Java (OpenJDK 13.0.1)",
                label: "Java (OpenJDK 13.0.1)",
                value: "java",
                defaultcode:`class HelloWorld {
        public static void main(String[] args) {
                System.out.println("Hello, World!"); 
        }
}
                `,
                extension:".java"
        },

        {
                id: 78,
                name: "Kotlin (1.3.70)",
                label: "Kotlin (1.3.70)",
                value: "kotlin",
                extension:".kt"
        },
      
       
        {
                id: 67,
                name: "Pascal (FPC 3.0.4)",
                label: "Pascal (FPC 3.0.4)",
                value: "pascal",
                extension:".pp"
        },
        {
                id: 85,
                name: "Perl (5.28.1)",
                label: "Perl (5.28.1)",
                value: "perl",
                extension:".pl"
        },
        {
                id: 68,
                name: "PHP (7.4.1)",
                label: "PHP (7.4.1)",
                value: "php",
                extension:".php"
        },
        
        {
                id: 70,
                name: "Python (2.7.17)",
                label: "Python (2.7.17)",
                value: "python",
                defaultcode:`print('Hello, world!')
                `,
                extension:".py"
        },
        {
                id: 71,
                name: "Python (3.8.1)",
                label: "Python (3.8.1)",
                value: "python",
                defaultcode:`print('Hello, world!')
                `,
                extension:".py"
        },
        {
                id: 72,
                name: "Ruby (2.7.0)",
                label: "Ruby (2.7.0)",
                value: "ruby",
                extension:".rb"
        },
        {
                id: 73,
                name: "Rust (1.40.0)",
                label: "Rust (1.40.0)",
                value: "rust",
                extension:".rs"

        },
        {
                id: 82,
                name: "SQL (SQLite 3.27.2)",
                label: "SQL (SQLite 3.27.2)",
                value: "sql",
                extension:".sql"
        },     
];