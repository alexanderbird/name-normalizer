package util;

public class AuthorNameNormalizer {
    public String normalize(String name) {
        String[] parts = parts(name);
        if (isMononym(parts))
            return name;
        return lastName(parts) + ", " +
               firstName(parts);
    }

    private String[] parts(String name) {
        return name.trim().split(" ");
    }

    private String firstName(String[] parts) {
        return parts[0];
    }

    private String lastName(String[] parts) {
        return parts[1];
    }

    private boolean isMononym(String[] parts) {
        return parts.length == 1;
    }
}

