#include <iostream>

using namespace std;

void swap(int * arrPtr, int index1, int index2) {
    int temp = arrPtr[index1];
    arrPtr[index1] = arrPtr[index2];
    arrPtr[index2] = temp;
}

void swapSmallerValuesToFront(int arr [],
                              int outerIndex,
                              int lastIndex) {
    
    for (int innerIndex = outerIndex + 1; innerIndex <= lastIndex; innerIndex++) {
        // the value at outerIndex may always change because
        // it may be switched with previous elements that are smaller
        // than it. That's why we must access the outerIndex value
        // every time here.
        if (arr[innerIndex] < arr[outerIndex]) {
            cout << " We need to swap because current element is smaller" << endl;
            swap(arr, innerIndex, outerIndex);
        }
    }
}


void selectionSort(int arr [], int size) {
    cout << "size: " << size << endl;
    int lastIndex = size - 1;
    for (int pass = 0; pass <= lastIndex - 1; pass++) {
        cout << "----> Outer Index: " << pass << endl;
        swapSmallerValuesToFront(arr, pass, lastIndex);
    }
}
                   
int main() {
    
    int intArray [] = {13,61,44,88,1,34,54,12,22,2,4,6,3,5,7};
    int arrSize = sizeof(intArray)/sizeof(int);
    
    selectionSort(intArray, arrSize);
    
    // display the results
    for ( int i = 0; i < arrSize; i++) {
        cout << intArray[i] << endl;
    }
    
    return 0;
}
