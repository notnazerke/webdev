function truncate(s, max) {
    return (s.length > max) ? s.slice(0, max - 1) + '…' : s;
}

truncate("What I'd like to tell on this topic is:", 20)
truncate("Hi everyone!", 20)