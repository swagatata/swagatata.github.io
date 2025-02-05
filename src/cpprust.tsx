import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Rust vs C++: A Quick Tour",
      content: (
        <div className="space-y-4">
          <p className="text-lg">Key topics we'll cover:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Memory Safety & Ownership</li>
            <li>Error Handling</li>
            <li>Modern Features</li>
            <li>Performance & Safety Trade-offs</li>
          </ul>
        </div>
      )
    },
    {
      title: "Memory Safety & Ownership",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-bold mb-2">C++</p>
              <pre className="bg-gray-100 p-4 rounded text-sm">
{`// Potential dangling pointer
int* ptr = new int(42);
delete ptr;  // ptr is now dangling
*ptr = 43;   // undefined behavior!

// Double free
int* ptr2 = new int(42);
delete ptr2;
delete ptr2;  // undefined behavior!`}
              </pre>
            </div>
            <div>
              <p className="font-bold mb-2">Rust</p>
              <pre className="bg-gray-100 p-4 rounded text-sm">
{`// Won't compile - ownership rules prevent
// dangling references
let mut x = Box::new(42);
let y = &x;  // borrow of x
drop(x);     // can't drop while borrowed
println!("{}", y);

// Double free impossible due to
// ownership system`}
              </pre>
            </div>
          </div>
          <p className="text-sm mt-4">Rust's ownership system prevents common memory errors at compile time</p>
        </div>
      )
    },
    {
      title: "Mutability & Borrowing in Rust",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-bold mb-2">Mutable References</p>
              <pre className="bg-gray-100 p-4 rounded text-sm">
{`// Only one mutable reference at a time
let mut value = 42;
let ref1 = &mut value;
*ref1 = 43;
// let ref2 = &mut value;  // Won't compile!
// println!("{}", value);  // Won't compile!

// After ref1's scope ends:
println!("{}", value);  // Works: 43`}
              </pre>
            </div>
            <div>
              <p className="font-bold mb-2">Multiple Immutable Borrows</p>
              <pre className="bg-gray-100 p-4 rounded text-sm">
{`// Many immutable references allowed
let data = vec![1, 2, 3];
let ref1 = &data;
let ref2 = &data;
let ref3 = &data;

println!("{:?} {:?}", ref1, ref2);

// But can't modify while borrowed
// data.push(4);  // Won't compile!`}
              </pre>
            </div>
          </div>
          <div className="mt-4">
            <p className="font-bold mb-2">Advanced Ownership Patterns</p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
{`// Moving ownership
let s1 = String::from("hello");
let s2 = s1;  // s1 is moved, can't use it anymore

// Cloning for explicit copies
let s1 = String::from("hello");
let s2 = s1.clone();  // Both usable!

// Borrowing in functions
fn process(data: &mut Vec<i32>) {
    data.push(42);  // Modifies original
}

let mut vec = vec![1, 2, 3];
process(&mut vec);  // Borrowing for function call`}
            </pre>
          </div>
          <p className="text-sm mt-4">Rust's borrowing rules prevent data races at compile time while allowing efficient memory use</p>
        </div>
      )
    },
    {
      title: "Error Handling",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-bold mb-2">C++</p>
              <pre className="bg-gray-100 p-4 rounded text-sm">
{`// Exception-based error handling
try {
    File file("data.txt");
    file.read();
} catch (const std::exception& e) {
    std::cerr << e.what();
}

// Or error codes
int result = process();
if (result == ERROR_CODE) {
    // handle error
}`}
              </pre>
            </div>
            <div>
              <p className="font-bold mb-2">Rust</p>
              <pre className="bg-gray-100 p-4 rounded text-sm">
{`// Result type for explicit error handling
let file = match File::open("data.txt") {
    Ok(file) => file,
    Err(error) => {
        println!("Error: {}", error);
        return;
    }
};

// Or using the ? operator
let file = File::open("data.txt")?;`}
              </pre>
            </div>
          </div>
          <p className="text-sm mt-4">Rust enforces explicit error handling through Result type</p>
        </div>
      )
    },
    {
      title: "Modern Features",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-bold mb-2">C++</p>
              <pre className="bg-gray-100 p-4 rounded text-sm">
{`// Smart pointers
auto ptr = std::make_unique<int>(42);

// Lambda expressions
auto lambda = [](int x) { 
    return x * 2; 
};

// Range-based for
for (const auto& item : items) {
    // ...
}`}
              </pre>
            </div>
            <div>
              <p className="font-bold mb-2">Rust</p>
              <pre className="bg-gray-100 p-4 rounded text-sm">
{`// Pattern matching
match value {
    Some(x) => println!("Got {}", x),
    None => println!("Nothing"),
}

// Closures
let double = |x| x * 2;

// Iterator methods
items.iter()
    .filter(|x| x > &5)
    .map(|x| x * 2)
    .collect()`}
              </pre>
            </div>
          </div>
          <p className="text-sm mt-4">Both languages offer modern programming features with different approaches</p>
        </div>
      )
    },
    {
      title: "Key Takeaways",
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li>Rust enforces memory safety at compile time through ownership system</li>
            <li>Error handling is explicit and enforced in Rust</li>
            <li>Both languages are systems programming languages with zero-cost abstractions</li>
            <li>C++ offers more flexibility but with more responsibility</li>
            <li>Rust has steeper learning curve but prevents common bugs</li>
          </ul>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="h-96">
        <CardContent className="h-full p-6">
          <div className="flex flex-col h-full">
            <h2 className="text-2xl font-bold mb-6">{slides[currentSlide].title}</h2>
            <div className="flex-grow overflow-auto">
              {slides[currentSlide].content}
            </div>
            <div className="flex justify-between items-center mt-6">
              <button 
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              <span className="text-sm text-gray-500">
                Slide {currentSlide + 1} of {slides.length}
              </span>
              <button 
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
              >
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Presentation;