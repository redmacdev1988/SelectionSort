# SelectionSort
Selection sort written in JS

http://shanghaiseagull.com/index.php/2017/10/11/7582/

Time Complexity: O(n2) as there are two nested loops.

Auxiliary Space: O(1)
The good thing about selection sort is it never makes more than O(n) swaps and can be useful when memory write is a costly operation.


The idea behind this is that we have a outer index.

![](http://shanghaiseagull.com/wp-content/uploads/2017/10/selectionsort-outer-inner-1024x719.jpg)

For each outer index, we have an inner index that starts at the NEXT element.
Then it loops through the REST OF the elements.

It compares each element with the outer element.
If the outer element is smaller, we simply swap it with the outer like so:

    if (data[inner] < data[outer]) {
        swap(data, innerIndex, outerIndex);
    }

This way, the smallest element gets pulled to the front onto the outer index.


# Example

Outer starts at index 0, which is value 6 .
[6] 8 0 7 6 4 3 1 5 10

Inner starts at the next element at value 8.

8 < 6? no
0 < 6? yes. swap

[0] 8 6 7 6 4 3 1 5 10

7 < 0? no
6 < 0? no
4 < 0? no
3 < 0? no
1 < 0? no
5 < 0? no
10 < 0? no.

outer 0 is finished.

0 [8] 6 7 6 4 3 1 5 10

outer 2. minimum starts at index 1, which is value 8.

Inner starts at next element, which is value 6.
6 < 8? yes. swap

0 [6] 8 7 6 4 3 1 5 10
7 < 6? no
6 < 6? no
4 < 6? yes, swap.

0 [4] 8 7 6 6 3 1 5 10

3 < 4? yes, swap

0 [3] 8 7 6 6 4 1 5 10

1 < 3? yes, swap

0 [1] 8 7 6 6 4 3 5 10
5 < 1? no
10 < 1? no.

Outer index 1 finished.


Outer index 2 starts, which is value 8.

0 1 [8] 7 6 6 4 3 5 10
</pre>

...continuing on in the same fashion...

Eventually all the smallest number will be swapped to the front, resulting in the list being sorted.
