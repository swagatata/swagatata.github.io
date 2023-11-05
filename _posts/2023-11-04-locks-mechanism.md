# Locking Mechanism

I wanted to go through how locking is done instead of why? Though to put it simply, we need locks to achieve correctness of concurrent applications.

## Threads 

### C++

[std::mutex](https://en.cppreference.com/w/cpp/thread/mutex) is the basic unit of a lock.
[std::lock](https://en.cppreference.com/w/cpp/thread/lock)
[std::lock_guard](https://en.cppreference.com/w/cpp/thread/lock_guard)

![Screenshot 2023-11-05 at 00 11 43](https://github.com/swagatata/swagatata.github.io/assets/235574/50a9352c-85dc-40a2-af1a-7f5f2fa90bae)

## Databases

